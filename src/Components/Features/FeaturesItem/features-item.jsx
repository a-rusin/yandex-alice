import "./features-item.scss";
import { forwardRef } from "react";
import { motion } from "framer-motion";

export const FeaturesItem = forwardRef(({ item }, ref) => {
  const classes = "features__item features__item_" + item.classFeatures;

  return (
    <li className={classes} ref={ref}>
      <h5 className="features__name">{item.title}</h5>
      <div className="features__text-block">
        <p className="features__title">{item.subtitle}</p>
        <p className="features__description">{item.description}</p>
      </div>
    </li>
  );
});

export const MFeaturesItem = motion(FeaturesItem);
