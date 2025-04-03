import { useNavigate } from 'react-router-dom';
const CancelPayment = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Cancelled</h1>
                <p className="mb-4">Your payment was cancelled. No charges were made.</p>
                <button 
                    onClick={() => navigate('/dashboard')}
                    className="btn btn-primary"
                >
                    Return to Dashboard
                </button>
            </div>
        </div>
    );
};

export default CancelPayment;