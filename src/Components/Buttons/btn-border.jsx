import "./btn.scss";

function BtnBorder({ url, title, classBtn }) {
  const classes = "border-btn " + classBtn;

  return (
    <a href={url} className={classes}>
      {title}
    </a>
  );
}

export default BtnBorder;
