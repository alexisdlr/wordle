import { useDispatch } from 'react-redux';

import { RootDispatch } from '../store/index';

const useRootDispatch = () => useDispatch<RootDispatch>();

export default useRootDispatch;