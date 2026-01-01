const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-sm text-muted-foreground">
          Preetham Satti © {new Date().getFullYear()}
        </p>
        <p className="font-body text-xs text-muted-foreground">
          Visual Designer | Graphic Designer | Motion & Video Editor
        </p>
      </div>
    </footer>
  );
};

export default Footer;
