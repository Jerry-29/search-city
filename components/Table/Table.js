import Image from 'next/image';
import styles from '@/components/Table/Table.module.css';

export const CustomTable = ({ results, loading }) => {
  if (loading) {
    return <div className={styles.spinner}></div>;
  }

  if (!results) {
    return <div className={styles.message}>Start searching</div>;
  }

  if (results.length === 0) {
    return <div className={styles.message}>No result found</div>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>#</th>
          <th>Place Name</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={result.id}>
            <td>{index + 1}</td>
            <td>{result.city}</td>
            <td>
              <Image
                src={`https://flagsapi.com/${result.countryCode}/flat/32.png`}
                alt={`${result.country} flag`}
                className={styles.flag}
                width={40}
                height={40}
              />
              {result.country}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

