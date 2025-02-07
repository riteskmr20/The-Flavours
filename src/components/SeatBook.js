import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { APIUrl, handleError, handleSuccess } from '../utils';
// import { ToastContainer } from 'react-toastify';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SeatBook() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Logged out');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    const totalSeats = 50;
    const [seats, setSeats] = useState(Array(totalSeats).fill(false)); // false = available, true = booked
    const [selectedSeats, setSelectedSeats] = useState([]);

    const toggleSeatSelection = (seatIndex) => {
        if (!seats[seatIndex]) {
            if (selectedSeats.includes(seatIndex)) {
                setSelectedSeats(selectedSeats.filter((seat) => seat !== seatIndex));
            } else {
                setSelectedSeats([...selectedSeats, seatIndex]);
            }
        }
    };

    const confirmBooking = () => {
        setSeats((prevSeats) =>
            prevSeats.map((booked, index) =>
                selectedSeats.includes(index) ? true : booked
            )
        );
        setSelectedSeats([]); // Clear selected seats after booking
        handleSuccess('Booking Confirmed!');
    };

    const cancelBooking = () => {
        setSeats((prevSeats) =>
            prevSeats.map((booked, index) =>
                selectedSeats.includes(index) ? false : booked
            )
        );
        setSelectedSeats([]);
        handleSuccess('Booking Canceled. Selected seats are now available.');
    };

    // Calculate stats
    const bookedSeats = seats.filter((seat) => seat).length;
    const availableSeats = totalSeats - bookedSeats;

    const styles = {
        theatre: {
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
        },
        stats: {
            margin: '20px',
            fontSize: '18px',
        },
        seatsContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 40px)',
            gap: '10px',
            justifyContent: 'center',
            margin: '20px auto',
        },
        seat: {
            width: '40px',
            height: '40px',
            fontSize: '14px',
            textAlign: 'center',
            border: '1px solid #000',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        available: {
            backgroundColor: '#f0f0f0',
        },
        booked: {
            backgroundColor: '#ff6b6b',
            cursor: 'not-allowed',
        },
        selected: {
            backgroundColor: '#6bffa6',
        },
        actions: {
            margin: '20px',
        },
        button: {
            margin: '5px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
        },
    };

    return (
        <div>
            <h1>Welcome {loggedInUser}</h1>
            <button onClick={handleLogout}>Logout</button>
            <div style={styles.theatre}>
                <h1>Theatre Seat Booking</h1>
                <div style={styles.stats}>
                    <p>Total Seats: {totalSeats}</p>
                    <p>Booked Seats: {bookedSeats}</p>
                    <p>Available Seats: {availableSeats}</p>
                </div>
                <div style={styles.seatsContainer}>
                    {seats.map((isBooked, index) => (
                        <button
                            key={index}
                            style={{
                                ...styles.seat,
                                ...(isBooked
                                    ? styles.booked
                                    : selectedSeats.includes(index)
                                    ? styles.selected
                                    : styles.available),
                            }}
                            onClick={() => toggleSeatSelection(index)}
                            disabled={isBooked}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                <div style={styles.actions}>
                    <button
                        style={styles.button}
                        onClick={confirmBooking}
                        disabled={selectedSeats.length === 0}
                    >
                        Confirm Booking
                    </button>
                    <button
                        style={styles.button}
                        onClick={cancelBooking}
                        disabled={selectedSeats.length === 0}
                    >
                        Cancel Booking
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SeatBook;