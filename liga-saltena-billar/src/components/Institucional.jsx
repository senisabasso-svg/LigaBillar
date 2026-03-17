import { motion } from 'framer-motion'
import { FaUserTie, FaClipboardCheck } from 'react-icons/fa'
import './Institucional.css'

const Institucional = () => {
  const autoridades = [
    { cargo: 'Presidente', nombre: 'Elías Tomás' },
    { cargo: 'Vice Presidente', nombre: 'Rubén Suarez' },
    { cargo: 'Secretaria', nombre: 'Nora Phoyu' },
    { cargo: 'Tesorero', nombre: 'Walker Figueroa' },
    { cargo: 'Vocal', nombre: 'Wiston Rios' }
  ]

  const comisionFiscal = [
    'Ricardo Álvez',
    'Fernando Viera',
    'Enzo Fagundez'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="institucional" className="section institucional-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestra Institución
        </motion.h2>

        <div id="autoridades" className="subsection">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Autoridades
          </motion.h3>
          <motion.div
            className="authorities-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {autoridades.map((auth, index) => (
              <motion.div
                key={index}
                className="authority-card"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }}
              >
                <div className="authority-icon">
                  <FaUserTie />
                </div>
                <h4>{auth.cargo}</h4>
                <p>{auth.nombre}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div id="comision-fiscal" className="subsection">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Comisión Fiscal
          </motion.h3>
          <motion.div
            className="fiscal-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {comisionFiscal.map((nombre, index) => (
              <motion.div
                key={index}
                className="fiscal-card"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }}
              >
                <div className="fiscal-icon">
                  <FaClipboardCheck />
                </div>
                <p>{nombre}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Institucional
