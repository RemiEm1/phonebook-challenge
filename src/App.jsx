import { useEffect, useMemo, useState } from "react";
import "./App.css";

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

    {
        id: 4,
        name: "Isabella Rivera",
        phone: "(555) 010-0104",
        email: "irivera@example.com",
        photo: "avatars/female.png",

    },
    {
        id: 5,
        name: "Ava Johnson",
        phone: "(555) 010-0105",
        email: "ajohnson@example.com",
        photo: "avatars/female.png",

    },
    {
        id: 6,
        name: "Mateo Rivera",
        phone: "(555) 010-0106",
        email: "mRivera@example.com",
        photo: "avatars/male.png",

    },
    {
        id: 7,
        name: "Liam Morales",
        phone: "(555) 010-0177",
        email: "lMorales@example.com",
        photo: "avatars/male.png",

    },
    {
        id: 8,
        name: "Sofia Lovelace",
        phone: "(555) 010-0101",
        email: "SfLovelace@example.com",
        photo: "avatars/female.png",

    },
    {
        id: 9,
        name: "Mateo Chen",
        phone: "(555) 010-2199",
        email: "mChen@example.com",
        photo: "avatars/male.png",

    },
    {
        id: 10,
        name: "Remi Morales",
        phone: "(555) 010-0110",
        email: "rMorales@example.com",
        photo: "avatars/male.png",

    },
];

const App = () => {
    const [contacts, setContacts] = useState(FALLBACK_CONTACTS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {}, []);

    const [query, setQuery] = useState("");

    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    function handleSubmit(e) {
        e.preventDefault();
        // Add contact submission logic here
    }

    return (
        <main className="page" data-testid="page-root">
            <header className="page__header">
                <h1 className="page__title">Phonebook</h1>
                <p className="page__subtitle">Contact Directory</p>
            </header>

            <section className="search" aria-labelledby="search-heading">
                <h2 id="search-heading">Search Contacts</h2>
                <div className="search__controls">
                    <label htmlFor="search-input">Search</label>
                    <input
                        id="search-input"
                        type="search"
                        placeholder="Search by name or phone"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        data-testid="search-input"
                    />
                </div>

                <p className="search__results" data-testid="results-count">
                    Showing {contacts.length}{" "}
                    {contacts.length === 1 ? "result" : "results"}
                    {loading ? " (loading...)" : ""}
                    {error ? ` (error: ${error})` : ""}
                </p>
            </section>

            <section className="contacts" aria-labelledby="contacts-heading">
    <h2 id="contacts-heading">Contacts</h2>

    <ul className="contacts__grid" aria-label="Contact list">
        {contacts.map((c) => (
            <li key={c.id}>
                <article className="contact-card" aria-labelledby={`c-${c.id}-name`}>
                    <img
                        src={c.photo || "https://via.placeholder.com/96?text=?"}
                        width="96"
                        height="96"
                        alt={`Portrait of ${c.name}`}
                    />
                    <h3 id={`c-${c.id}-name`} className="contact-card__name">
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
</section>


            <section className="form" aria-labelledby="form-heading">
                <h2 id="form-heading">Add a Contact</h2>
                <form className="form__body" onSubmit={handleSubmit} noValidate>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            placeholder ="Jane/John Doe" //Placeholder
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            minLength={2}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            name="phone"
                            inputMode="tel"
                            placeholder="(555) 555-5555"
                            value={form.phone}
                            onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="johnDoe@example.com"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="form__actions">
                        <button className="btn" type="submit" data-testid="btn-add">
                            Add Contact
                        </button>
                    </div>
                </form>
            </section>

            <footer className="page__footer">
                <small>
                    Starter provided. Complete tasks per README and make this page
                    shine.
                </small>
            </footer>
        </main>
    );
};

export default App;
