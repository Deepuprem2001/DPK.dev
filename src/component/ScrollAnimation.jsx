import { motion } from "framer-motion";

function ScrollAnimation({ children, delay = 0, direction = "up" }) {
  const variants = {
    up: { opacity: 0, y: 50 },
    down: { opacity: 0, y: -50 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
  };

  return (
    <motion.section
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.2 }} 
    >
      {children}
    </motion.section>
  );
}

export default ScrollAnimation