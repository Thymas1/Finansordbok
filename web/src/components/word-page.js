import {format, distanceInWords, differenceInDays} from 'date-fns'
import { Heading} from '@staccx/base'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'






function BlogPost (props) {
  const {_rawBody, categories, title, mainImage, publishedAt} = props
  return (

    <article>
      {mainImage && mainImage.asset && (
        <div>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 21) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <div>
        <div>
          <div>
            <Heading level={1}>{title}</Heading>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside>
            {publishedAt && (
              <div>
                <p>Published:</p>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
            {categories && (
              <div>
                <Heading level={3}>Categories</Heading>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </article>

  )
}

export default BlogPost
