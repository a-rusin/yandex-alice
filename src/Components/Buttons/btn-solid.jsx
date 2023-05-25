import "./btn.scss";

function BtnSolid({ url, title, classBtn }) {
  const classes = "btn " + classBtn;

  return (
    <a href={url} className={classes}>
      {title}
    </a>
  );
}

export default BtnSolid;
