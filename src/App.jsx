import { useState } from "react";
import "./App.css";

const FALLBACK_CONTACTS = [
  { id: 1, name: "Ada Lovelace", phone: "(555) 010-0101", email: "ada@example.com", photo: "avatars/female.png" },
  { id: 2, name: "Alan Turing", phone: "(555) 010-0102", email: "alan@example.com", photo: "avatars/male.png" },
  { id: 3, name: "Grace Hopper", phone: "(555) 010-0103", email: "grace@example.com", photo: "avatars/female.png" },
  { id: 4, name: "Isabella Rivera", phone: "(555) 010-0104", email: "irivera@example.com", photo: "avatars/female.png" },
  { id: 5, name: "Ava Johnson", phone: "(555) 010-0105", email: "ajohnson@example.com", photo: "avatars/female.png" },
  { id: 6, name: "Mateo Rivera", phone: "(555) 010-0106", email: "mrivera@example.com", photo: "avatars/male.png" },
  { id: 7, name: "Liam Morales", phone: "(555) 010-0177", email: "lmorales@example.com", photo: "avatars/male.png" },
  { id: 8, name: "Sofia Lovelace", phone: "(555) 010-0101", email: "sflovelace@example.com", photo: "avatars/female.png" },
  { id: 9, name: "Mateo Chen", phone: "(555) 010-2199", email: "mchen@example.com", photo: "avatars/male.png" },
  { id: 10, name: "Remi Morales", phone: "(555) 010-0110", email: "rmorales@example.com", photo: "avatars/male.png" },
];

const App = () => {
  const [contacts] = useState(FALLBACK_CONTACTS);
  // Section 3: pagination state (1-based page index)
  const [page, setPage] = useState(1); //Page initialized to 1
  const totalPages = contacts.length || 1;
// Clamp the index so it's always valid even if the list changes
  const index = Math.min(Math.max(page - 1, 0), totalPages - 1);
  const current = contacts[index];

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  const atFirst = page <= 1;
  const atLast = page >= totalPages;
  
  return (
    <div className="app-frame">
      <div className="container">
        <main className="page" data-testid="page-root">
          <header className="page__header">
            <h1 className="page__title">Phonebook</h1>
            <p className="page__subtitle">Retro Contact Directory</p>
          </header>

          <section className="contacts" aria-labelledby="contacts-heading">
            <h2 id="contacts-heading">Contacts</h2>
            <ul className="contacts__grid" aria-label="Contact list (single item)">
  <li key={current.id}>
    <article className="contact-card" aria-labelledby={`c-${current.id}-name`}>
      <img
        src={current.photo || "https://via.placeholder.com/96?text=?"}
        width="96"
        height="96"
        alt={`Portrait of ${current.name}`}
      />
      <h3 id={`c-${current.id}-name`} className="contact-card__name">
        {current.name}
      </h3>
      <p className="contact-card__phone">
        <strong>Phone:</strong> {current.phone}
      </p>
      <p className="contact-card__email">
        <strong>Email:</strong> {current.email}
      </p>
    </article>
  </li>
</ul>

<nav className="pagination" aria-label="Pagination"> 
  <button className="btn" onClick={goPrev} disabled={atFirst} aria-label="Previous contact">
    Previous 
  </button>
  <span className="page-indicator" aria-live="polite">
    {page} / {totalPages}
  </span>
  <button className="btn" onClick={goNext} disabled={atLast} aria-label="Next contact">
    Next
  </button>  {/*Used the nav function to add both Previous and Next buttons*/}
</nav> 

          </section>

          <footer className="page__footer">
            <small>Section 2: Retro theme version with focus-visible styles.</small>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
