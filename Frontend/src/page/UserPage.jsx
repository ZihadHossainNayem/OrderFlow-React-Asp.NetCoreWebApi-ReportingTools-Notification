import { useState, useEffect } from "react";
import axios from "axios";

// Mock data
const mockBooks = [
  { id: 1, title: "Book One", price: 10 },
  { id: 2, title: "Book Two", price: 12 },
];

function UserPage() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
  });

  useEffect(() => {
    // here API call to  backend to fetch books
    axios
      .get("https://localhost:7205/api/Book")
      .then((result) => {
        setBooks(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
    /* setBooks(mockBooks); */
  }, []);

  // handle selecting a book
  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  // handle input changes for the order form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Order details:", orderDetails, "Selected book:", selectedBook);

    const orderToSubmit = {
      customerName: orderDetails.name,
      address: orderDetails.address,
      title: selectedBook.title,
      price: selectedBook.price,
    };

    // send the orderDetails and selectedBook to backend API
    try {
      const response = await axios.post(
        "https://localhost:7205/api/Order",
        orderToSubmit,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Order submitted successfully:", response.data);

      setSelectedBook(null);
      setOrderDetails({
        name: "",
        address: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8 max-w-[1500px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Select a Book to Order</h2>
      <hr className="border-t border-blue-500" />
      <div className="grid grid-cols-2 gap-4 cursor-pointer my-10">
        {books.map((book) => (
          <div
            key={book.id}
            className="border p-4 hover:border-blue-500"
            onClick={() => handleSelectBook(book)}
          >
            <p className="text-lg font-semibold">{book.title}</p>
            <p className="text-gray-600">Price: {book.price} Taka</p>
          </div>
        ))}
      </div>

      {selectedBook && (
        <form onSubmit={handleSubmit}>
          <hr className="border-t border-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-4">Order Details</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="bookName"
              value={selectedBook.title}
              placeholder="Book Name"
              className="border border-blue-100 p-2 mb-4"
              disabled
            />
            <input
              type="text"
              name="bookName"
              value={selectedBook.price}
              placeholder="Book Name"
              className="border border-blue-100 p-2 mb-4"
              disabled
            />
            <input
              type="text"
              name="name"
              value={orderDetails.name}
              onChange={handleInputChange}
              required
              placeholder={"Your Name"}
              className="border border-blue-100 hover:border-blue-500 p-2 mb-4 outline-none"
            />
            <input
              type="text"
              name="address"
              value={orderDetails.address}
              onChange={handleInputChange}
              required
              placeholder="Your Address"
              className="border border-blue-100 hover:border-blue-500 p-2 mb-4 outline-none"
            />
            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default UserPage;
