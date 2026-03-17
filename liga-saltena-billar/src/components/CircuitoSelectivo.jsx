import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTrophy, FaChartLine, FaUsers, FaCalculator } from 'react-icons/fa'
import './CircuitoSelectivo.css'

const CircuitoSelectivo = () => {
  const [activeCategory, setActiveCategory] = useState(null)

  const categories = [
    { id: 'tercera', name: 'Tercera', color: '#1a5f3f' },
    { id: 'segunda', name: 'Segunda', color: '#4a9d6e' },
    { id: 'primera', name: 'Primera', color: '#0d3d26' }
  ]

  const points = [
    { position: '1° Lugar', points: 8, description: 'Promedio: Suma de puntos realizados / Suma de puntos en contra' },
    { position: '2° Lugar', points: 6 },
    { position: '3° Lugar', points: 4 },
    { position: '4° Lugar', points: 2 }
  ]

  return (
    <div id="circuito-selectivo" className="circuit-section">
      <motion.h3
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Circuito Selectivo Salteño
      </motion.h3>
      
      <motion.p
        className="highlight-text"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        ⭐ Este es el torneo que se está jugando actualmente ⭐
      </motion.p>

      <div className="circuit-categories">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            className="category-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
          >
            <div className="category-icon" style={{ color: category.color }}>
              <FaTrophy />
            </div>
            <h4>{category.name}</h4>
            <button className="btn-category">Ver Posiciones</button>
          </motion.div>
        ))}
      </div>

      <div className="circuit-rules">
        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaChartLine /> Reglamento del Circuito Selectivo
        </motion.h4>

        <div className="rules-container">
          <motion.div
            className="rule-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h5><FaUsers /> Serie de 4 Jugadores</h5>
            <div className="bracket-diagram">
              <div className="bracket-level">
                <div className="match">
                  <div className="player">1 vs 4</div>
                  <div className="match-label">Partido 1</div>
                </div>
                <div className="match">
                  <div className="player">2 vs 3</div>
                  <div className="match-label">Partido 2</div>
                </div>
              </div>
              <div className="bracket-arrow">↓</div>
              <div className="bracket-level">
                <div className="match final">
                  <div className="player">Ganador P1 vs Ganador P2</div>
                  <div className="match-label">Final</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rule-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h5><FaTrophy /> Sistema de Puntos</h5>
            <div className="points-table">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  className="points-row"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5, backgroundColor: 'rgba(26, 95, 63, 0.05)' }}
                >
                  <span className="position">{point.position}</span>
                  <span className="points">{point.points} puntos</span>
                </motion.div>
              ))}
            </div>
            <p className="points-note">
              {points[0].description}
            </p>
          </motion.div>

          <motion.div
            className="rule-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h5><FaCalculator /> Cálculo del Promedio</h5>
            <p className="promedio-description">
              El promedio se calcula como: <strong>Suma de puntos realizados / Suma de puntos en contra</strong>
            </p>
            
            <div className="example-box">
              <h6>Ejemplo:</h6>
              <div className="example-content">
                <div className="example-set">
                  <span className="set-label">Primer Set:</span>
                  <span className="set-score">60 / 30</span>
                </div>
                <div className="example-set">
                  <span className="set-label">Segundo Set:</span>
                  <span className="set-score">30 / 60</span>
                </div>
                <div className="example-set">
                  <span className="set-label">Tercer Set:</span>
                  <span className="set-score">60 / 30</span>
                </div>
                <motion.div
                  className="example-result"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <span className="result-label">Promedio:</span>
                  <span className="result-score">150 / 120</span>
                </motion.div>
                <p className="note">
                  <em>Nota: En caso de ganar los dos sets, el último se cuenta como 60 / 0</em>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rule-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h5>Desarrollo del Torneo</h5>
            <ol className="tournament-steps">
              <li>Se juegan los partidos 1 vs 4 y 2 vs 3</li>
              <li>Los ganadores se enfrentan entre sí</li>
              <li>El ganador de ese enfrentamiento queda primero en la serie con 8 puntos</li>
              <li>Los perdedores juegan entre sí</li>
              <li>El ganador de los perdedores juega con el perdedor de los dos ganadores</li>
            </ol>
          </motion.div>
        </div>

        {categories.map((category) => (
          <AnimatePresence key={category.id}>
            {activeCategory === category.id && (
              <motion.div
                id={`posiciones-${category.id}`}
                className="positions-section"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h4>Regionales Posiciones - {category.name}</h4>
                <div className="positions-placeholder">
                  <p>Las posiciones se actualizarán próximamente</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  )
}

export default CircuitoSelectivo
