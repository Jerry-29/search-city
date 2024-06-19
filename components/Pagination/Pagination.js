import { useState } from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange, onLimitChange, query }) => {
    const [limit, setLimit] = useState(5);

    const handleLimitChange = (e) => {
        const newLimit = e.target.value;
        if (newLimit > 10) {
            alert('The maximum limit is 10. Please enter a value between 1 and 10.');
        } else {
            setLimit(newLimit);
            onLimitChange(newLimit);
        }
    };

    return (
        <>
            {totalPages > 1 && (
                <div className={styles.paginationContainer}>
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={styles.paginationButton}
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => onPageChange(index + 1)}
                            className={`${styles.paginationButton} ${index + 1 === currentPage ? styles.active : ''
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={styles.paginationButton}
                    >
                        Next
                    </button>
                    <input
                        type="number"
                        value={limit}
                        onChange={handleLimitChange}
                        className={styles.limitInput}
                        min="1"
                        max="10"
                    />
                    <span>Items per page</span>
                </div>
            )}
        </>
    );
};

export default Pagination;
