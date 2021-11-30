import ReactDOM from 'react-dom';

const PortalWrapper = ({ children, portalElement }) => ReactDOM.createPortal(children, portalElement);

export default PortalWrapper;
