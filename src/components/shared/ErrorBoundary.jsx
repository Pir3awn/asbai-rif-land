import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '.'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
    // Log error to your preferred error tracking service
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-6 rounded-lg bg-red-50 dark:bg-red-900/10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-4">
              Something went wrong
            </h2>
            
            <p className="text-red-600 dark:text-red-300 mb-6">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>

            <div className="space-x-4">
              <Button onClick={this.handleReset} variant="primary">
                Try Again
              </Button>
              <Button
                onClick={() => window.location.reload()}
                variant="secondary"
              >
                Reload Page
              </Button>
            </div>

            {process.env.NODE_ENV === 'development' && (
              <details className="mt-6 text-left w-full">
                <summary className="text-sm text-red-700 dark:text-red-300 cursor-pointer">
                  Error details
                </summary>
                <pre className="mt-2 p-4 bg-red-100 dark:bg-red-900/20 rounded overflow-auto text-xs text-red-800 dark:text-red-200">
                  {this.state.error && this.state.error.toString()}
                  {this.state.errorInfo && (
                    <>
                      {'\n\nComponent Stack:\n'}
                      {this.state.errorInfo.componentStack}
                    </>
                  )}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node
}

export default ErrorBoundary 