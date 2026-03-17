import { motion } from 'framer-motion'
import { FaTrophy, FaUsers, FaChartLine } from 'react-icons/fa'
import './Trending.css'

const Trending = () => {
  const trendingItems = [
    {
      icon: <FaChartLine />,
      title: 'Circuito Selectivo Salteño 2026',
      description: 'En curso - Seguí los resultados y posiciones en tiempo real',
      link: '#circuito-selectivo',
      color: '#1a5f3f'
    },
    {
      icon: <FaTrophy />,
      title: 'Campeonato Oficial LSB 2026',
      description: 'Preparación Individual por Series y por Equipo',
      link: '#campeonato-oficial-lsb',
      color: '#4a9d6e'
    },
    {
      icon: <FaUsers />,
      title: 'Campeonato Salteño',
      description: 'Pareja de Tercera, Segunda, Primera e Individual',
      link: '#campeonato-oficial-lsb',
      color: '#0d3d26'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="section trending-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          La Tendencia Hoy En Día
        </motion.h2>
        <motion.div
          className="trending-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {trendingItems.map((item, index) => (
            <motion.article
              key={index}
              className="trending-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="trending-icon" style={{ color: item.color }}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className="trending-link">
                Ver más <span>→</span>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Trending
