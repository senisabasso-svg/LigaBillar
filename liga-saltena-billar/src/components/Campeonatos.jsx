import { motion } from 'framer-motion'
import { FaTrophy, FaChartBar, FaCalculator } from 'react-icons/fa'
import CircuitoSelectivo from './CircuitoSelectivo'
import './Campeonatos.css'

const Campeonatos = () => {
  const campeonatosLSB = [
    {
      title: 'Preparación Individual por Series',
      icon: <FaTrophy />
    },
    {
      title: 'Preparación Individual por Equipo',
      icon: <FaTrophy />
    },
    {
      title: 'Campeonato Salteño',
      icon: <FaTrophy />,
      items: [
        'Pareja de Tercera',
        'Pareja de Segunda',
        'Pareja de Primera',
        'Individual'
      ]
    }
  ]

  return (
    <section id="campeonatos" className="section campeonatos-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Campeonatos
        </motion.h2>

        <div id="campeonato-oficial-lsb" className="subsection">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Campeonato Oficial LSB 2026
          </motion.h3>
          <div className="championship-list">
            {campeonatosLSB.map((camp, index) => (
              <motion.div
                key={index}
                className="championship-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="championship-icon">{camp.icon}</div>
                <div>
                  <h4>{camp.title}</h4>
                  {camp.items && (
                    <ul>
                      {camp.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="campeonato-federacion" className="subsection">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Campeonato Oficial Federación Uruguay de Billar
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="federation-text"
          >
            Participación en los campeonatos oficiales de la Federación Uruguaya de Billar.
          </motion.p>
        </div>

        <CircuitoSelectivo />
      </div>
    </section>
  )
}

export default Campeonatos
