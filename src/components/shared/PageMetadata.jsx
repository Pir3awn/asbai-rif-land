import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const PageMetadata = ({ title, description }) => {
  const { t } = useTranslation()
  
  useEffect(() => {
    // Update page title
    document.title = `${title ? `${t(title)} - ` : ''}RIF LAND`
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (description) {
      if (metaDescription) {
        metaDescription.setAttribute('content', t(description))
      } else {
        const meta = document.createElement('meta')
        meta.name = 'description'
        meta.content = t(description)
        document.head.appendChild(meta)
      }
    }
  }, [title, description, t])

  return null
}

PageMetadata.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default PageMetadata 