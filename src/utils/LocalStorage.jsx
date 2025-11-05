const employees = [
  {
    "id": 1,
    "firstName": "Shekhar",
    "email": "user@me.com",
    "password": "123",
    "taskCount": {
      "active": 3,
      "newTask": 5,
      "complete": 12,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "title": "Prepare Monthly Sales Report",
        "description": "Compile and summarize sales data for the month of October.",
        "date": "2025-11-01",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "title": "Update Client Database",
        "description": "Add newly onboarded clients to CRM system.",
        "date": "2025-10-15",
        "category": "Data Entry"
      },
      {
        "active": false,
        "newTask": false,
        "complete": false,
        "failed": true,
        "title": "Follow Up on Payment Issues",
        "description": "Reach out to clients with pending payments.",
        "date": "2025-10-28",
        "category": "Finance"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "complete": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "title": "Design Marketing Banner",
        "description": "Create promotional banner for Diwali campaign.",
        "date": "2025-11-03",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "complete": false,
        "failed": false,
        "title": "Team Coordination Meeting",
        "description": "Discuss weekly progress with the marketing team.",
        "date": "2025-11-02",
        "category": "Meetings"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "title": "Upload Social Media Posts",
        "description": "Schedule posts for company LinkedIn and Instagram.",
        "date": "2025-10-20",
        "category": "Social Media"
      },
      {
        "active": false,
        "newTask": false,
        "complete": false,
        "failed": true,
        "title": "Create Newsletter",
        "description": "Prepare November newsletter draft.",
        "date": "2025-10-30",
        "category": "Content"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rahul",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "complete": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "complete": false,
        "failed": false,
        "title": "Fix Login Bug",
        "description": "Resolve issue preventing users from logging in.",
        "date": "2025-11-03",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "title": "Code Review for Payment Module",
        "description": "Review teammate’s code for the online payment feature.",
        "date": "2025-10-25",
        "category": "Code Review"
      },
      {
        "active": false,
        "newTask": true,
        "complete": false,
        "failed": false,
        "title": "Develop API for Order Tracking",
        "description": "Build REST API to track user orders in real-time.",
        "date": "2025-11-02",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "complete": false,
        "failed": true,
        "title": "Implement Notification System",
        "description": "Set up push notifications for order status updates.",
        "date": "2025-10-27",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "title": "Database Optimization",
        "description": "Improve query performance in MySQL database.",
        "date": "2025-10-10",
        "category": "Database"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Simran",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "complete": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "title": "Prepare Client Presentation",
        "description": "Design presentation for upcoming client meeting.",
        "date": "2025-11-04",
        "category": "Presentation"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "title": "Collect Feedback",
        "description": "Gather client feedback on last project delivery.",
        "date": "2025-10-22",
        "category": "Client Relations"
      },
      {
        "active": false,
        "newTask": false,
        "complete": false,
        "failed": true,
        "title": "Submit Expense Report",
        "description": "Upload team expense details for October.",
        "date": "2025-10-30",
        "category": "Finance"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Neha",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "complete": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "title": "Customer Support Tickets",
        "description": "Resolve high-priority tickets from weekend backlog.",
        "date": "2025-11-03",
        "category": "Support"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "title": "Update Help Articles",
        "description": "Revise FAQs for new product version release.",
        "date": "2025-10-26",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "complete": false,
        "failed": true,
        "title": "Customer Survey Report",
        "description": "Summarize feedback from October survey.",
        "date": "2025-10-28",
        "category": "Analytics"
      },
      {
        "active": false,
        "newTask": true,
        "complete": false,
        "failed": false,
        "title": "Team Training Session",
        "description": "Conduct training for new support agents.",
        "date": "2025-11-05",
        "category": "Training"
      }
    ]
  }
];



const admin = [
  {
    "id": 1,
    "email": "admin@me.com",
    "firstName": "Admin Bhaiya",
    "password": "123"
  }
];


export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLoaclStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
}