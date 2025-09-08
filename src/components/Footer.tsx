export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {currentYear} John Smith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};