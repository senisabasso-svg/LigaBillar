import { motion } from 'framer-motion'
import { FaBuilding } from 'react-icons/fa'
import './Instituciones.css'

const Instituciones = () => {
  const instituciones = [
    'Almagro A',
    'Almagro B',
    'Salto Nuevo',
    'Cultura A',
    'Cultura B',
    'Sociedad Recreativa Centenario',
    'Círculo Sportivo'
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="instituciones" className="section instituciones-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Instituciones Afiliadas
        </motion.h2>
        <motion.div
          className="institutions-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {instituciones.map((institucion, index) => (
            <motion.div
              key={index}
              className="institution-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="institution-icon">
                <FaBuilding />
              </div>
              <h4>{institucion}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Instituciones
