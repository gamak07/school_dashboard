export const sidebarData = [
    { name: "Dashboard", link: "/" },
    {
      name: "Admission",
      subs: [
        { name: "Applications Received", link: "/applications" },
        { name: "Entrance Examination", link: "/entrance_exam" },
        { name: "Entrance Exam Scores", link: "/entrance_exam_scores" },
        { name: "Entrance Exam Scores Review", link: "/review_exam_scores" },
        { name: "Settings", link: "/admission_settings" },
      ],
    },
    {
      name: "People",
      subs: [
        {
          name: "Students",
          subSubs: [
            { name: "View Students", link: "/students" },
            { name: "Enroll Student", link: "/enroll" },
            {
              name: "Students Promotion / Class Transfer / Graduation",
              link: "/promotions",
            },
            { name: "Student Tags", link: "/tags" },
            { name: "Graduated Alumni", link: "/alumni" },
            { name: "Communication Book", link: "/communication" },
            { name: "Birthday Anniversaries", link: "/birthdays" },
          ],
        },
        {
          name: "Parents",
          subSubs: [
            { name: "Parents / Guardian", link: "/parents" },
            { name: "Families", link: "/families" },
          ],
        },
        {
          name: "Teachers / Staffs",
          subSubs: [
            { name: "Teachers", link: "/teachers" },
            { name: "Admission Officer", link: "/admission_officer" },
            { name: "Accountant", link: "/accountant" },
            { name: "Librarian", link: "/librarian" },
            { name: "Hostel Manager", link: "/hostel_manager" },
            { name: "Transport Manager", link: "/transport_manager" },
            { name: "General Staffs", link: "/general_staffs" },
            { name: "Administrator", link: "/admin" },
          ],
        },
      ],
    },
    {
      name: "Academics",
      subs: [
        {
          name: "Learning",
          subSubs: [
            { name: "Classes", link: "/classes" },
            { name: "Subjects", link: "/subjects" },
            { name: "Virtual Classroom", link: "/virtual" },
            { name: "Timetable / Schedule", link: "/schedule" },
          ],
        },
        {
          name: "CBT",
          subSubs: [
            { name: "Question Bank", link: "/students" },
            { name: "Instruction Sets", link: "" },
            { name: "CBT Schedules", link: "" },
            { name: "CBT Scores", link: "" },
            { name: "CBT Practice", link: "" },
          ],
        },
        {
          name: "Exams",
          subSubs: [
            { name: "Terms / Periods", link: "/students" },
            { name: "Exam / Reports", link: "" },
            { name: "Exam Timetables", link: "" },
            { name: "Schedule Exam", link: "" },
          ],
        },
      ],
    },
    {
      name: "E-Class",
      subs: [
        { name: "Virtual Classroom", link: "/library" },
        { name: "Resource Library", link: "" },
      ],
    },
    {
      name: "Results",
      subs: [
        {
          name: "Result Checker",
          subSubs: [
            { name: "Student Result Checker", link: "/class" },
            { name: "Class Result Checker", link: "" },
          ],
        },
        {
          name: "Result / Grade Book",
          subSubs: [
            { name: "CBT Grade Book", link: "/class" },
            { name: "Exercises Grade Book", link: "" },
            { name: "Results Grade Book(Score Entry)", link: "" },
            { name: "Cognitive Skills Assessment", link: "" },
            { name: "Review and Publish Results", link: "" },
            { name: "Results Email Delivery Queue", link: "" },
          ],
        },
        {
          name: "Result Settings",
          subSubs: [
            { name: "Grading Systems", link: "/class" },
            { name: "Score Division / Template", link: "" },
            { name: "Comments Bank", link: "" },
            { name: "Configure Cognitive Skills", link: "" },
            { name: "Result Sheet Preference", link: "" },
            { name: "Clear Result Cache", link: "" },
          ],
        },
        {
          name: "Result Scratch Cards",
          subSubs: [
            { name: "Generate Scratch Cards", link: "/class" },
            { name: "View Scratch Cards", link: "" },
            { name: "Preferences", link: "" },
            { name: "Sell / Assign Scratch Cards", link: "" },
          ],
        },
      ],
    },
    {
      name: "Finance",
      subs: [
        {
          name: "Fees and Bursary",
          subSubs: [
            { name: "Invoices", link: "/parents" },
            { name: "Family Fees", link: "/parents" },
            { name: "Manage Fees", link: "/parents" },
            { name: "Verify Payment Status", link: "/parents" },
            { name: "Fees Notification / Reminder", link: "/parents" },
            { name: "Payment Settings", link: "/parents" },
          ],
        },
        {
          name: "Logs and Reports",
          subSubs: [
            { name: "All Payment Logs", link: "/parents" },
            { name: "Successful Payment Logs", link: "/parents" },
            { name: "Fees Debtors", link: "/parents" },
          ],
        },
        {
          name: "Financial Book-Keeping",
          subSubs: [
            { name: "Cash Requests", link: "/parents" },
            { name: "Expenditure", link: "/parents" },
            { name: "Income", link: "/parents" },
          ],
        },
        {
          name: "HRM / Payroll",
          subSubs: [
            { name: "Monthly Salaries Processing", link: "/parents" },
            { name: "Salary Payment Schedule", link: "/parents" },
            { name: "Salary Payment Wallet", link: "/parents" },
            { name: "Basic Salaries and Banks", link: "/parents" },
            { name: "Grade level and Steps", link: "/parents" },
            { name: "Leave Applications", link: "/parents" },
            { name: "Leave Categories", link: "/parents" },
          ],
        },
      ],
    },
    {
      name: "Attendance",
      subs: [
        {
          name: "Students Attendance",
          subSubs: [
            { name: "Mark Daily Attendance", link: "" },
            { name: "Daily Attendance Reports", link: "" },
            { name: "Mark Lesson / Class Attendance", link: "" },
            { name: "", link: "" },
          ],
        },
        {
          name: "Teachers Attendance",
          subSubs: [
            { name: "Mark Teachers Attendance", link: "" },
            { name: "Teachers Attendance Reports", link: "" },
          ],
        },
        {
          name: "Staffs Attendance",
          subSubs: [
            { name: "Mark Staffs Attendance", link: "" },
            { name: "Staffs Attendance Reports", link: "" },
          ],
        },
      ],
    },

    {
      name: "Admin",
      subs: [
        {
          name: "Communication",
          subSubs: [
            { name: "Message", link: "" },
            { name: "News / Broadcasts", link: "" },
            { name: "Bulk SMS", link: "" },
            { name: "Email", link: "" },
            { name: "Birthday message Settings", link: "" },
            { name: "Media Gallery", link: "" },
          ],
        },
        {
          name: "Facilities",
          subSubs: [
            { name: "Library", link: "" },
            {
              name: "Hostel",
              subSubSubs: [
                { name: "Hostel Records", link: "" },
                { name: "Hostel Allocation", link: "" },
              ],
            },
            {
              name: "School Tranport",
              subSubSubs: [
                { name: "Vehicles and Routes", link: "" },
                { name: "Transport Allocation", link: "" },
              ],
            },
            {name: 'Inventory / Store Management'}
          ],
        },
        {
          name: "Website CMS",
          subSubs: [
            { name: "Domain Name ", link: "" },
            { name: "Template and Color Scheme", link: "" },
            { name: "Carousel", link: "" },
            { name: "Pages and Contents", link: "" },
            { name: "Menu and Navigation", link: "" },
            { name: "News Desk", link: "" },
            { name: "Media Gallery", link: "" },
            { name: "SEO", link: "" },
            { name: "Social Handlers", link: "" },
            { name: "Contact Form Entries", link: "" },
            { name: "Newsletters Subscription", link: "" },
          ],
        },
        {
          name: "Documents",
          link: "",
        },
        {
          name: "Settings",
          link: "",
        },
      ],
    },
  ];