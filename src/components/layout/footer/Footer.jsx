import './Footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 Checpoint. Todos los derechos reservados.</p>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://res.cloudinary.com/dugq5bp2r/image/upload/v1715896061/o9nkgvgmclybvnil0pcu.png" alt="Facebook" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://res.cloudinary.com/dugq5bp2r/image/upload/v1715896094/izqaetm7zlrtlmn3wsir.png" alt="Instagram" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://res.cloudinary.com/dugq5bp2r/image/upload/v1715896159/zj7okx9xd30seuk9s57p.png" alt="Twitter" />
      </a>
    </div>
  );
};
