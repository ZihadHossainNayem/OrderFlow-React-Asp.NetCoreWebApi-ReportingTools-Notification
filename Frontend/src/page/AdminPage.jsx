import axios from "axios";
import { useState, useEffect } from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";

// Mock data
const mockOrders = [
  { id: 1, clientName: "Alice", bookTitle: "Book One", price: 10 },
  { id: 2, clientName: "Bob", bookTitle: "Book Two", price: 12 },
];

const mockNotifications = [
  { id: 1, message: "New order received from Alice" },
  { id: 2, message: "Bob's order has been dispatched" },
];

function AdminPage() {
  const [orders, setOrders] = useState([]);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    // here API call to backend to fetch books
    axios
      .get("https://localhost:7205/api/Order")
      .then((result) => {
        setOrders(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // generating report for individual order here
  const handleGenerateReport = (orderId) => {
    console.log(`Generating report for order ID: ${orderId}`);
    // reporting tools or service integration here
  };

  // generating revenue report here
  const handleGenerateRevenueReport = () => {
    console.log("Generating revenue report...");
    // reporting tools or service integration here
  };

  return (
    <div className="p-8 max-w-[1500px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="flex justify-between mb-4">
        <button
          onClick={handleGenerateRevenueReport}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate Revenue Report
        </button>
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
          >
            <MdOutlineNotificationsNone size={25} />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
            )}
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-[400px] bg-white border rounded shadow-xl">
              <ul>
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    className="p-4 border-b hover:bg-gray-100 cursor-pointer"
                  >
                    {notification.message}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border hover:border-green-500 p-4 flex justify-between gap-6"
          >
            <div>
              <p>
                <strong>Client Name:</strong>
                <span className="text-gray-800"> {order.customerName}</span>
              </p>
              <p>
                <strong>Address:</strong>
                <span className="text-gray-800"> {order.address}</span>
              </p>
              <p>
                <strong>Book Title:</strong>
                <span className="text-gray-800"> {order.title}</span>
              </p>
              <p>
                <strong>Price:</strong>
                <span className="text-gray-800"> {order.price}</span> Taka
              </p>
            </div>
            <div className="my-auto">
              <button
                onClick={() => handleGenerateReport(order.id)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Generate Invoice for this Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
