import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Process from './components/Process';
import { FiDownload } from 'react-icons/fi';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

const styles = {
  color: {
    'primary-100': '#EDD8FF',
    'primary-200': '#DBB1FF',
    'primary-300': '#C98BFF',
    'primary-400': '#B764FF',
    'primary-500': '#A53DFF',
    'primary-600': '#8431CC',
    'primary-700': '#632599',
    'primary-800': '#421866',
    'primary-900': '#210C33',
  },
  blends: {
    'gray-50': '#F0F1F3',
    'gray-100': '#E6E8EB',
    'gray-200': '#C3C7CE',
    'gray-300': '#A5ACB5',
    'gray-400': '#87909D',
    'gray-500': '#697484',
    'gray-600': '#556070',
    'gray-700': '#424E60',
    'gray-800': '#2B384C',
    'gray-900': '#132238',
  },
};

function App() {
  return (
    <div className="App">
      <Process
        c1={styles.color['primary-500']}
        c2={styles.blends['gray-600']}
        c3={styles.blends['gray-900']}
        title="1. Research"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        aliquet, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, et
        aliquet nisl nisl sit amet lorem. Sed euismod, nisl vitae ultricies
        lacinia, nisl nisl aliquet nisl, et aliquet nisl nisl sit amet lorem."
      />
    </div>
  );
}

export default App;
