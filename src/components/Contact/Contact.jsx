import "./Contact.css";

const Contact = (props) => {
    const { name, phone, email, photo } = props;
    return (
        <div className="contact-card">
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    );
};

export default Contact;
