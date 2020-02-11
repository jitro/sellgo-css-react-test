import React, {Fragment} from 'react'

export default function ProductInfo({textHeading, textCode}) {
  return (
    <Fragment>
      <td><img src="assets/media/image/Image37.png" alt="Icon" /></td>
      <td>
        <div>
          <div className="text-heading">{textHeading} …</div>
          <div className="icon-box">
            <div><img src="/assets/media/image/Ellipse180.png" alt="Icon" /></div>
            <div><span className="text-code">{textCode}</span></div>
            <div><img src="/assets/media/image/skull-crossbones.png" alt="Icon" /></div>
            <div><img src="/assets/media/image/lock.png" alt="Icon" /></div>
            <div><img src="/assets/media/image/th-list.png" alt="Icon" /></div>
            <div><img src="/assets/media/image/cubes.png" alt="Icon" /></div>
            <div><img src="/assets/media/image/comment-dollar.png" alt="Icon" /></div>
          </div>
        </div>
      </td>
    </Fragment>
  )
}
