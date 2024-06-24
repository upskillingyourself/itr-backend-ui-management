import React, { useState } from 'react';
import { FaQuestionCircle, FaMinus, FaPlus } from 'react-icons/fa';


const accordions = [
  {
    "question": "Who is required to file Income tax return?",
    "answer": "The Income Tax Act, 1961, mandates individuals to file an Income Tax Return (ITR) if their income exceeds the specified threshold limits set by the government.",
    "details": {
      "Individuals": "Any individual whose total income before allowing deductions under Section 80C to 80U exceeds the basic exemption limit is required to file an ITR. This includes salaried individuals, self-employed professionals, freelancers, and businessmen.",
      "Companies": "All companies, whether domestic or foreign, are required to file income tax returns irrespective of whether they have made profits or incurred losses during the financial year.",
      "Partnership Firms": "Partnership firms are also required to file income tax returns.",
      "Hindu Undivided Family (HUF)": "HUFs that have total income exceeding the basic exemption limit need to file an ITR.",
      "Trusts": "Trusts, including charitable trusts, if their income exceeds the basic exemption limit, are required to file an ITR.",
      "Association of Persons (AOP) and Body of Individuals (BOI)": "AOPs and BOIs, if their income exceeds the basic exemption limit, are required to file an ITR.",
      "Resident Individuals with Foreign Assets/Income": "Resident individuals who hold foreign assets or have earned income from foreign sources are required to file an ITR, even if their total income is below the exemption limit.",
      "Individuals Claiming Refund": "Individuals who have paid excess taxes or are eligible for a tax refund need to file an ITR to claim the refund.",
      "Individuals with Taxable Capital Gains": "Individuals who have earned capital gains from the sale of property, stocks, or other assets are required to file an ITR, irrespective of the total income.",
      "Individuals with Agricultural Income": "Individuals who have agricultural income exceeding Rs. 5,000 are required to file an ITR.",
    },
    "note": "It's essential to note that even if an individual's income is below the taxable threshold, they might still want to file an ITR for various reasons, such as claiming refunds, applying for loans, visa processing, etc. Additionally, the government may notify specific categories or individuals for mandatory filing, so it's crucial to stay updated with the latest tax regulations."
  },
  {
    "question": "What is e-filing of ITR (Income tax return)?",
    "answer": "Electronic filing or e-filing of Income Tax Returns (ITR) refers to the process of submitting your tax return electronically through the internet. The e-filing system was introduced by the Income Tax Department of India to simplify the process of tax filing, make it more convenient, efficient, and reduce paperwork.",
    "details": {
      "Registration": "Taxpayers need to register themselves on the official Income Tax Department portal (https://www.incometaxindiaefiling.gov.in) to access the e-filing facility. Registration typically involves providing details such as PAN (Permanent Account Number), name, date of birth, and contact information.",
      // "Preparation of Tax Return": {
      //   "Method 1": "Manually filling out the forms available for download on the income tax portal.",
      //   "Method 2": "Using online expert assistance and user-friendly software of toratax."
      // }
    },
    "note": "E-filing of ITR offers several benefits such as faster processing, reduced chances of errors, online tracking of tax refunds, anytime-anywhere access, and environmentally friendly as it reduces paper consumption."
  },
  {
    "question": "What is the due date for e-filing of ITR (Income tax return)?",
    "answer": "The due date for e-filing of Income Tax Returns (ITR) varies depending on the taxpayer's category and the financial year.",
    "details": {
      "Individuals, HUF, AOP & BOI (whose accounts are not required to be audited)": "The due date for e-filing of ITR is usually July 31st of the assessment year. For example, for income earned during the financial year 2023-24, the due date would typically be July 31, 2024.",
      "Individuals and businesses (whose accounts are required to be audited)": "Individuals who are required to get their accounts audited under the Income Tax Act, typically have a due date of October 31st of the assessment year.",
      "Companies and Persons Required to Furnish Report Under Section 92E": "Companies and persons who are required to furnish a report under section 92E of the Income Tax Act generally have a due date of November 30th of the assessment year.",
      "Belated return": "Due date of December 31st of the assessment year.",
      "Revise return": "Due date of December 31st of the assessment year."
    }
  },
  {
    "question": "What is the penalty for late filing of ITR (Income tax return)?",
    "answer": "Taxpayers are required to file their Income Tax Returns (ITR) within the prescribed due dates specified by the Income Tax Department. Failure to file the ITR within the deadline may attract penalties and consequences.",
    "details": {
      "Late Filing Fee under Section 234F": "If a taxpayer files the ITR after the due date but before December 31 of the assessment year, a late filing fee of up to Rs. 5,000 may be levied. However, if the total income of the taxpayer does not exceed Rs. 5,00,000, the late filing fee is capped at Rs. 1,000.",
      "Interest on Tax Due": "In addition to the late filing fee, taxpayers may also be liable to pay interest on any tax amount due. The interest is charged under sections 234A, 234B, and 234C of the Income Tax Act, 1961, depending on the nature of the default and the delay in filing.",
      "Loss of Deductions and Carry Forward of Losses": "Taxpayers who file their ITR after the due date may lose certain deductions or benefits under the Income Tax Act. For example, if a taxpayer fails to file their ITR within the due date, they may lose the benefit of carrying forward certain losses incurred during the financial year."
    },
    "note": "It's important for taxpayers to file their ITR within the prescribed due dates to avoid penalties and other consequences. Additionally, timely filing ensures compliance with tax laws and facilitates smooth processing of tax refunds, if applicable."
  },
  {
    "question": "How to e-verify ITR (Income tax return)?",
    "answer": "E-verification is a process used to authenticate the filing of an income tax return electronically without the need for sending a physical signed copy of the ITR-V (Acknowledgement) to the Income Tax Department.",
    "details": {
      "Step 1": "Prepare and File Your Income Tax Return. Before you can e-verify your ITR, you need to prepare and file your income tax return.",
      "Step 2": "Choose an E-Verification Method Net Banking : If your bank is authorized for net banking-based verification, you can log in to your net banking account and select the option to e-verify your return. Aadhaar OTP : If your Aadhaar is linked to your PAN, you can choose the Aadhaar OTP (One-Time Password) method. An OTP will be sent to your registered mobile number linked with Aadhaar for verification. Electronic Verification Code (EVC) : You can generate an EVC through various methods such as using your net banking account, pre-validated bank account, demat account, or by using the government's e-filing portal. Bank ATM : Some banks offer the facility to e-verify your ITR through their ATMs. Check with your bank if this facility is available. DSC (Digital Signature Certificate) : If you have obtained a digital signature certificate, you can e-verify your return using the DSC option.",
      "Step 3": "E-Verify Your ITR. Once you've chosen your preferred e-verification method, follow the specific steps associated with that method. For example: If you're using Aadhaar OTP, enter the OTP received on your mobile and submit it. If you're using EVC, enter the code when prompted. If you're using net banking, log in to your net banking account and follow the instructions to e-verify your return.",
      "Step 4": "Confirmation. After successfully e-verifying your ITR, you'll receive a confirmation message on the e-filing portal as well as to your registered email ID. This confirms that your return has been successfully e-verified."
    }
  },
  {
    "question": "How to choose correct Income tax return (ITR) form?",
    "answer": "Choosing the correct Income Tax Return (ITR) form is crucial as it ensures accurate reporting of your income, deductions, and other financial details to the Income Tax Department in India.",
    "details": {
      "ITR-1": "Applicable for resident individuals having income from salaries, one house property, other sources (excluding winnings from lottery and race horses), and having total income up to ₹50 lakhs.",
      "ITR-2": "Applicable for individuals and HUFs not having income from profits and gains of business or profession. It is applicable for individuals having income from capital gains, multiple house properties, foreign assets/income, etc.",
      "ITR-3": "Applicable for individuals and HUFs having income from profits and gains of business or profession.",
      "ITR-4 (Sugam)": "Applicable for individuals, HUFs, and firms (other than LLP) being a resident having total income up to ₹50 lakhs and having income from business and profession which is computed under sections 44AD, 44ADA, or 44AE.",
      "ITR-5": "Applicable for firms, LLPs, AOPs (Association of Persons), BOIs (Body of Individuals), artificial juridical persons, cooperative societies, and local authorities.",
      "ITR-6": "Applicable for companies registered in India under companies act (except companies claiming exemption under section 11).",
      "ITR-7": "Applicable for entities claiming exemption as charitable/religious trust, political parties, scientific research institutions and colleges or universities."
    }
  },
  {
    "question": "What is Form-16?",
    "answer": "Form-16 is a certificate issued by employers to their employees as per the guidelines of the Income Tax Department of India. It is a crucial document for taxpayers as it provides details about the salary earned and the taxes deducted by the employer on behalf of the employee during a financial year. Form-16 serves as proof of the TDS (Tax Deducted at Source) and salary earned by the employee, which is essential for filing income tax returns.",
    "details": {
      "Components of Form-16": "Part A : This part contains details about the tax deducted by the employer from the employee's salary and deposited with the government. It includes information such as the employer's TAN (Tax Deduction and Collection Account Number), the employee's PAN (Permanent Account Number), the assessment year, and the summary of tax deducted and deposited. Part B : Part B of Form-16 provides a detailed breakup of the employee's salary income, exemptions, deductions allowed under the Income Tax Act, and the total taxable income. It includes components such as salary, allowances, deductions under Section 80C, 80D, etc., and the tax computed on the total income.",
       "Importance of Form-16": 
       "Proof of Income : Form-16 serves as proof of the salary earned by the employee during the financial year. Proof of TDS : It provides evidence of the taxes deducted at source by the employer on behalf of the employee. Filing Income Tax Returns : Form-16 is essential for filing income tax returns. Taxpayers use the information provided in Form-16 to accurately report their income and claim deductions while filing their returns. Verification and Assessment : Tax authorities may request Form-16 during assessments or audits to verify the income and taxes paid by the taxpayer.",
      "Obtaining Form-16": "Employers are required to issue Form-16 to their employees by a specified deadline, usually on or before 15th June of the assessment year following the financial year for which the certificate is issued."
    }
  }
];

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container my-5">
      <div id="accordion" className="myaccordion w-100"  aria-multiselectable="true">
        {accordions.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-header p-0" role="tab" id={`heading${index}`}>
              <h2 className="mb-0">
                <button
                  className={`d-flex py-3 px-4 align-items-center justify-content-between btn btn-link ${activeIndex === index ? '' : 'collapsed'}`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index ? 'true' : 'false'}
                  aria-controls={`collapse${index}`}
                >
                  <div className='d-flex gap-4 align-items-center'>
                    <p className="mb-0"><FaQuestionCircle /></p>
                    <p className="mb-0">{item.question}</p>
                  </div>
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </button>
              </h2>
            </div>
            <div
              id={`collapse${index}`}
              className={`collapse ${activeIndex === index ? 'show' : ''}`}
              role="tabpanel"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                <p>{item.answer}</p>
                <h5>{item.heading}</h5>
                <ul>
                  {Object.entries(item.details).map(([key, value], i) => (
                    <li key={i}><strong>{key}:</strong> {value}</li>
                  ))}
                </ul>
                <p>{item.note}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <>
      
      </>
    </div>
  );
};

export default Accordian;
