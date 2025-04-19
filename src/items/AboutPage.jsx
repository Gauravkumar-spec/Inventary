import { useNavigate } from "react-router-dom";


const AboutPage = () => {
    const navigate = useNavigate();
  
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-700">
        <div className="dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              About Our Inventory Management Solution
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Our enterprise-grade Inventory Management System is designed to revolutionize your supply chain operations. 
              Leveraging advanced analytics and automation, we provide comprehensive tools to optimize stock levels, 
              reduce carrying costs, and enhance operational efficiency across your organization.
            </p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                Key Capabilities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Real-time inventory tracking across multiple locations",
                  "Predictive analytics for demand forecasting",
                  "Automated purchase order generation",
                  "Barcode/QR code scanning integration",
                  "Customizable reporting and dashboards",
                  "Role-based access control with audit trails",
                  "API integrations with ERP and eCommerce platforms",
                  "Mobile-friendly interface for on-the-go management"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                Technology Stack
              </h2>
              
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "React.js", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
                  { name: "Node.js", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
                  { name: "Express", color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300" },
                  { name: "PostgreSQL", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300" },
                  { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300" },
                  { name: "AWS", color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300" },
                ].map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-100 dark:border-blue-900/30">
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-200 mb-3">
                Our Value Proposition
              </h3>
              <p className="text-blue-700 dark:text-blue-300">
                We combine cutting-edge technology with industry best practices to deliver an inventory solution that 
                scales with your business. Our platform reduces stockouts by 85% and improves inventory accuracy to 99.5%, 
                giving you complete control over your supply chain.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Ready to optimize your inventory?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Schedule a personalized demo today
                </p>
              </div>
              
              <button
         onClick={() => navigate("/contact")}
         className="bg-red-800 border p-2 rounded-md"        >
                Request Demo
               
              </button>

            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // You'll need to import this icon from your icon library
  const CheckCircleIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
  
  export default AboutPage;