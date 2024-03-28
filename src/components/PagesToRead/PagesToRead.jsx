import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { getStoredData } from '../../utility/localStorageRead';



const PagesToRead = () => {

    const loadedValue = useLoaderData();

    const storedData = getStoredData();

    const getValue = storedData.map(val => loadedValue.find(data => data.bookId === val));



    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
    );

    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='max-w-6xl mx-auto mt-16 bg-base-200 p-8 rounded-2xl'>
            <BarChart width={600} height={300} data={getValue}>
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8"
                    shape={<TriangleBar />} />
            </BarChart>
        </div>
    );
};

export default PagesToRead;