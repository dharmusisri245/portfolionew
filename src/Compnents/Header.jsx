import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Download, Eye, FileText } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleViewResume = () => {
    setShowPdfViewer(true);
  };

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "../../public/ (1).pdf";
    link.download = "Dharmu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <div className="text-gray-800 text-xl font-bold tracking-tight">
                <span className="text-blue-600">Portfolio</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : ""
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/Skills"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : ""
                  }`
                }
              >
                Skills
              </NavLink>
              <NavLink
                to="/Project"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : ""
                  }`
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : ""
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/ContactMe"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : ""
                  }`
                }
              >
                Contact
              </NavLink>

              {/* Resume Actions */}
              <div className="flex items-center space-x-2 ml-6 pl-6 border-l border-gray-200">
                <button
                  onClick={handleViewResume}
                  className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  <Eye size={16} />
                  <span>View Resume</span>
                </button>
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center space-x-1 bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                >
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <NavLink
                  to="/"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                      isActive ? "text-blue-600 bg-blue-50" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/Skills"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                      isActive ? "text-blue-600 bg-blue-50" : ""
                    }`
                  }
                >
                  Skills
                </NavLink>
                <NavLink
                  to="/Project"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                      isActive ? "text-blue-600 bg-blue-50" : ""
                    }`
                  }
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/About"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                      isActive ? "text-blue-600 bg-blue-50" : ""
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/ContactMe"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                      isActive ? "text-blue-600 bg-blue-50" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>

                {/* Mobile Resume Actions */}
                <div className="px-3 py-2 border-t border-gray-200 mt-2">
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => {
                        handleViewResume();
                        toggleMenu();
                      }}
                      className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium justify-center"
                    >
                      <Eye size={16} />
                      <span>View Resume</span>
                    </button>
                    <button
                      onClick={() => {
                        handleDownloadResume();
                        toggleMenu();
                      }}
                      className="flex items-center space-x-2 bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm font-medium justify-center"
                    >
                      <Download size={16} />
                      <span>Download Resume</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* PDF Viewer Modal */}
      {showPdfViewer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <FileText className="mr-2" size={20} />
                Resume - Dharmu
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center space-x-1 bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition-colors"
                >
                  <Download size={14} />
                  <span>Download</span>
                </button>
                <button
                  onClick={() => setShowPdfViewer(false)}
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-auto">
              {/* PDF.js Integration - In a real app, you'd use react-pdf or similar */}
              <div className="bg-gray-100 h-96 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 mb-2">
                    PDF Viewer would be integrated here
                  </p>
                  <p className="text-sm text-gray-500">
                    Install: npm install react-pdf pdfjs-dist
                  </p>
                  <div className="mt-4 p-3 bg-white rounded text-left text-xs">
                    <code className="text-gray-700">
                      {`import { Document, Page } from 'react-pdf';
// Use <Document file="resume.pdf"><Page pageNumber={1} /></Document>`}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
