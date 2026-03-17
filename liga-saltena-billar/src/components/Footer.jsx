import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Institucional', href: '#institucional' },
    { name: 'Campeonatos', href: '#campeonatos' },
    { name: 'Instituciones', href: '#instituciones' },
    { name: 'Contacto', href: '#contacto' }
  ]

  const interestLinks = [
    {
      name: 'Confederación Panamericana de Billar',
      href: 'https://cpbillar.net/',
      external: true,
      imgSrc: '/links-interes/Logo-cpb-icono.png'
    },
    {
      name: 'Unión Mundial de Billar',
      href: 'https://www.umb-carom.org/ProductDetails.aspx?id=363&ide=2324&lng=2',
      external: true,
      imgSrc: '/links-interes/UMB.png'
    },
    {
      name: 'GCS Billiardo',
      href: 'https://www.gestionecs.com/#google_vignette',
      external: true,
      imgSrc: null
    },
    {
      name: 'Billard Channel',
      href: 'https://www.gestionecs.com/#google_vignette',
      external: true,
      imgSrc: '/links-interes/Billard-Channel.jpg'
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4>Liga Salteña de Billar</h4>
            <p>Sitio Oficial de la Liga Salteña de Billar</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4>Enlaces</h4>
            <ul>
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Enlaces de Interés</h4>
            <ul className="interest-links">
              {interestLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="interest-link"
                    href={link.href}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : ''}
                  >
                    {link.imgSrc ? (
                      <img className="interest-logo" src={link.imgSrc} alt={link.name} loading="lazy" />
                    ) : (
                      <div className="interest-logo placeholder" aria-hidden="true">
                        GCS
                      </div>
                    )}
                    <span className="interest-name">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>&copy; {currentYear} Liga Salteña de Billar. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
