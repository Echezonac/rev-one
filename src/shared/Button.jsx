import PropTypes from 'prop-types'

const Button = ({children, isDisabled, version, type}) => {
  return (
    <button disabled={isDisabled} type={type} className={`btn btn-${version}`}> 
      {children}
    </button>
  )
}

Button.defaultProps = {
    isDisabled:false,
    version:'secondary',
    type:'submit'
}
Button.propTypes = {
    children:PropTypes.node.isRequired,
    isDisabled:PropTypes.bool,
    version:PropTypes.string,
    type:PropTypes.string
}

export default Button
