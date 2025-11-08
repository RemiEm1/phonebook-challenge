import { useEffect, useMemo, useState } from "react";
import "./App.css";

/** Local fallback contacts (used if fetch fails) */
const FALLBACK_CONTACTS = [
    {
        id: 1,
        name: "Ada Lovelace",
        phone: "(555) 010-0101",
        email: "ada@example.com",
        photo: "avatars/female.png",
    },
    {
        id: 2,
        name: "Alan Turing",
        phone: "(555) 010-0102",
        email: "alan@example.com",
        photo: "avatars/male.png",
    },
    {
        id: 3,
        name: "Grace Hopper",
        phone: "(555) 010-0103",
        email: "grace@example.com",
        photo: "avatars/female.png",
    },
];

/** Simple id generator */
const newId = () => Date.now() + Math.floor(Math.random() * 1000);

export default function App() {
    // data + ui state
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState("");

    // search state
    const [query, setQuery] = useState("");

    // form state
    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    const [errors, setErrors] = useState({});

    /** Fetch from /data/contacts.json, fall back to local list on failure */
    useEffect(() => {
        let isMounted = true;
        (async () => {
            try {
                const res = await fetch("/data/contacts.json", { cache: "no-store" });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                if (isMounted) {
                    // Normalize missing photos (optional)
                    const withPhotos = (data || []).map((c, i) => ({
                        photo:
                            c.photo ||
                            (i % 2 ? "avatars/male.png" : "avatars/female.png"),
                        ...c,
                    }));
                    setContacts(withPhotos);
                    setLoadError("");
                }
            } catch (err) {
                // Fallback
                if (isMounted) {
                    setContacts(FALLBACK_CONTACTS);
                    setLoadError("Loaded local fallback (network or file error).");
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        })();
        return () => {
            isMounted = false;
        };
    }, []);

    /** Case-insensitive search by name OR phone */
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return contacts;
        return contacts.filter(
            (c) =>
                (c.name || "").toLowerCase().includes(q) ||
                (c.phone || "").toLowerCase().includes(q)
        );
    }, [contacts, query]);

    /** Form validation */
    const validate = (f) => {
        const e = {};
        if (!f.name || f.name.trim().length < 2)
            e.name = "Name must be at least 2 characters.";
        if (!f.phone || !f.phone.trim()) e.phone = "Phone is required.";
        if (!f.email || !f.email.includes("@")) e.email = "Email must include @.";
        return e;
    };

    /** Submit: add new contact to TOP of list and clear form */
    const onSubmit = (ev) => {
        ev.preventDefault();
        const e = validate(form);
        setErrors(e);
        if (Object.keys(e).length) return;

        const contact = {
            id: newId(),
            name: form.name.trim(),
            phone: form.phone.trim(),
            email: form.email.trim(),
            photo: "avatars/male.png", // or pick based on a dropdown later
        };
        setContacts((prev) => [contact, ...prev]);
        setForm({ name: "", phone: "", email: "" });
        setErrors({});
    };

    return (
        <div className="app-frame">
            <div className="container">
                <main className="page" data-testid="page-root">
                    <header className="page__header">
                        <h1 className="page__title">Phonebook</h1>
                        <p className="page__subtitle">Contacts & Information</p>
                    </header>

                    {/* Search */}
                    <section className="search" style={{ marginBottom: "1rem" }}>
                        <label className="sr-only" htmlFor="q">
                            Search
                        </label>
                        <input
                            id="q"
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search by name or phone…"
                            className="input"
                            aria-label="Search contacts by name or phone"
                        />
                    </section>

                    {/* Loading / Error */}
                    {loading && <p role="status">Loading contacts…</p>}
                    {!loading && loadError && (
                        <p role="alert" style={{ color: "#b00020" }}>
                            {loadError}
                        </p>
                    )}

                    {/* Contacts list */}
                    {!loading && (
                        <section
                            className="contacts"
                            aria-labelledby="contacts-heading"
                        >
                            <h2 id="contacts-heading">Contacts</h2>

                            {filtered.length === 0 ? (
                                <p>No results.</p>
                            ) : (
                                <ul
                                    className="contacts__grid"
                                    aria-label="Contact list"
                                >
                                    {filtered.map((c) => (
                                        <li key={c.id}>
                                            <article
                                                className="contact-card"
                                                aria-labelledby={`c-${c.id}-name`}
                                            >
                                                <img
                                                    src={
                                                        c.photo ||
                                                        "https://via.placeholder.com/96?text=?"
                                                    }
                                                    width="96"
                                                    height="96"
                                                    alt={`Portrait of ${c.name}`}
                                                />
                                                <h3
                                                    id={`c-${c.id}-name`}
                                                    className="contact-card__name"
                                                >
                                                    {c.name}
                                                </h3>
                                                <p className="contact-card__phone">
                                                    <strong>Phone:</strong> {c.phone}
                                                </p>
                                                <p className="contact-card__email">
                                                    <strong>Email:</strong> {c.email}
                                                </p>
                                            </article>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    )}

                    {/* Add Contact Form */}
                    <section
                        aria-labelledby="add-heading"
                        style={{ marginTop: "2rem" }}
                    >
                        <h2 id="add-heading">Add Contact</h2>
                        <form onSubmit={onSubmit} noValidate className="form">
                            <div className="form__row">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({ ...form, name: e.target.value })
                                    }
                                    placeholder="e.g., Robert Emicente"
                                />
                                {errors.name && (
                                    <small className="error">{errors.name}</small>
                                )}
                            </div>

                            <div className="form__row">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    id="phone"
                                    value={form.phone}
                                    onChange={(e) =>
                                        setForm({ ...form, phone: e.target.value })
                                    }
                                    placeholder="(555) 010-0104"
                                />
                                {errors.phone && (
                                    <small className="error">{errors.phone}</small>
                                )}
                            </div>

                            <div className="form__row">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={form.email}
                                    onChange={(e) =>
                                        setForm({ ...form, email: e.target.value })
                                    }
                                    placeholder="rEmicente@example.com"
                                />
                                {errors.email && (
                                    <small className="error">{errors.email}</small>
                                )}
                            </div>

                            <button className="btn" type="submit">
                                Add
                            </button>
                        </form>
                    </section>

                    <footer className="page__footer">
                        <small>Retro phonebook directory || Section 4.</small>
                    </footer>
                </main>
            </div>
        </div>
    );
}
