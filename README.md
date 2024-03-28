## User Interface
![localhost_5173_user](https://github.com/ZihadHossainNayem/OrderFlow-React-Asp.NetCoreWebApi-ReportingTools-Notification/assets/30808845/87ceaff2-0acc-48b9-8e5e-b9cf6d32e670)

##  Book Selection by User
![localhost_5173_user (1)](https://github.com/ZihadHossainNayem/OrderFlow-React-Asp.NetCoreWebApi-ReportingTools-Notification/assets/30808845/f430545e-eba7-4b8d-beb8-a7cd7b56eb3a)

## Confirming Order with Information
![localhost_5173_user (2)](https://github.com/ZihadHossainNayem/OrderFlow-React-Asp.NetCoreWebApi-ReportingTools-Notification/assets/30808845/5183d5c0-8f95-414d-9180-4e8474c3f770)

## Admin Interface
![localhost_5173_admin](https://github.com/ZihadHossainNayem/OrderFlow-React-Asp.NetCoreWebApi-ReportingTools-Notification/assets/30808845/644f581b-2e30-423d-bf51-96d986c6a8b7)

## Report Generation
![report](https://github.com/ZihadHossainNayem/OrderFlow-React-Asp.NetCoreWebApi-ReportingTools-Notification/assets/30808845/4e270bb1-d1ca-4cae-b79d-8f0b5dff3430)

## Kafka Producer Post Test
![hh](https://github.com/ZihadHossainNayem/OrderFlow-React-Asp.NetCoreWebApi-ReportingTools-Notification/assets/30808845/1f42ec1c-4b4b-4670-8e07-c0e2b1e9a8f9)


# Project Overview

This project aims to develop a book ordering system with distinct functionalities for users and administrators. The system facilitates book selection and order processing for users, while providing administrators with tools for real-time order monitoring and financial reporting.

## Tech Stack

- **Frontend:** React (with Vite), React Router DOM, Tailwind CSS
- **Backend:** ASP.NET Core Web API
- **Database:** MS SQL
- **Messaging:** Kafka
- **Reporting:** PowerBI

## Features

### General

- **Home Page:** Offers navigation options for different roles:
  - **As User:** Redirects to the user interface for book browsing and ordering.
  - **As Admin:** Leads to the administrative panel for order management and reporting.

### User Page

- **Book Display:** Lists 6 books fetched from the ASP.NET Core Web API, backed by an MS SQL database.
- **Order Process:**
  - Selecting a book opens a form for order details (name, address, auto-filled price and book name).
  - Submitting the form sends the order details to the backend, where they're saved in the MS SQL database.

### Admin Page

- **Real-Time Notifications:** Utilizes Kafka for immediate alerts on new orders.
- **Order Management:** Displays a comprehensive list of all orders with client details.
- **Reporting:**
  - Generates invoices for each client.
  - Produces a revenue report accessible via PowerBI.

## Database Schema

### Books

- **ID:** Unique identifier for each book.
- **Title:** The title of the book.
- **Author:** The author's name.
- **Price:** The price of the book.

### Clients

- **ID:** Unique identifier for each client.
- **Client Name:** The name of the client.
- **Address:** The client's address.
- **Book ID:** Associated book identifier.
- **Order Date:** The date when the order was placed.

---

