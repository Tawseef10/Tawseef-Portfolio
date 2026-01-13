import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-900 text-center text-gray-600 text-sm font-mono">
      <p>&copy; {new Date().getFullYear()} Dotvely Studios. All systems nominal.</p>
    </footer>
  );
};

export default Footer;