import { motion } from "framer-motion";

import { fadeDown } from "../../const/transition";

import "./features.scss";

import { MFeaturesItem } from "./FeaturesItem/features-item";

function Features({ featuresItems }) {
  return (
    <motion.section viewport={{ amount: 0.35, once: true }} initial="hidden" whileInView="visible" className="features">
      <div className="features__content">
        <div className="container">
          <ul className="features__list">
            {featuresItems.map((item, index) => {
              return <MFeaturesItem variants={fadeDown} custom={index} key={item.id} item={item} />;
            })}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default Features;
