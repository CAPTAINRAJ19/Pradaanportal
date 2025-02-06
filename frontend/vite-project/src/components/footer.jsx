import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 sm:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        
        <div>
          <h2 className="text-2xl font-bold text-[#affc41]">Pradaan Portal</h2>
          <p className="mt-2 text-gray-400">A platform for donations to support underprivileged communities.</p>
          <p className="mt-2">📍 Address: 123 Help Street, New Delhi, India</p>
          <p>📧 Email: support@pradaanportal.org</p>
          <p>📞 Phone: +91 98765 43210</p>
        </div>

        
        <div>
          <h2 className="text-2xl font-bold text-[#affc41]">Supported NGOs</h2>
          <ul className="mt-2 text-gray-400">
            <li>🔹 UNICEF</li>
            <li>🔹 World Food Programme</li>
            <li>🔹 Oxfam International</li>
            <li>🔹 CRY - Child Rights and You</li>
            <li>🔹 Smile Foundation</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-2xl font-bold text-[#affc41]">Other Organizations</h2>
          <ul className="mt-2 text-gray-400">
            <li>🩸 Red Cross Society (Blood Donation)</li>
            <li>🩸 BloodConnect Foundation</li>
            <li>🏠 HelpAge India (Old Age Homes)</li>
            <li>👶 SOS Children's Villages (Orphans)</li>
            <li>💙 Make-A-Wish Foundation</li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Pradaan Portal. All rights reserved.</p>
        <p className='text-amber-400'>A CAPTAIN RAJ CREATION</p>
      </div>
    </footer>
  );
};

export default Footer;

