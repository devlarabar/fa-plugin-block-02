/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = (props) => {
    const {
        attributes: {
            title,
            buttonText,
            buttonURL,
            content,
            mediaURL1,
            mediaCaption1,
            mediaURL2,
            mediaCaption2,
            mediaURL3,
            mediaCaption3,
            mediaURL4,
            mediaCaption4 },
    } = props;

    const blockProps = useBlockProps.save({
        className: "fa-02-block"
    });
    return (
        <div {...blockProps}>
            <div class="fa-02-text-content">
                <RichText.Content
                    tagName="h2"
                    className="fa-header-bottom-divider"
                    value={title}
                />
                <RichText.Content
                    tagName="div"
                    value={content}
                />
                <div class="fa-02-button-container">
                    <a href={`/${buttonURL}`}><button class="fa-media-emphasis-block-btn wp-block-button__link wp-element-button">
                        {buttonText ? buttonText + " →" : "Read More →"}
                    </button></a>
                </div>
            </div>
            <div class="fa-02-gallery-container">
                {mediaURL1 && (
                    <div class="fa-02-image-container" style={{ backgroundImage: `url(${mediaURL1})` }}>
                        {mediaCaption1 && <span class="inner-caption-span">{mediaCaption1}</span>}
                    </div>
                )}
                {mediaURL2 && (
                    <div class="fa-02-image-container" style={{ backgroundImage: `url(${mediaURL2})` }}>
                        {mediaCaption2 && <span class="inner-caption-span">{mediaCaption2}</span>}
                    </div>
                )}
                {mediaURL3 && (
                    <div class="fa-02-image-container" style={{ backgroundImage: `url(${mediaURL3})` }}>
                        {mediaCaption3 && <span class="inner-caption-span">{mediaCaption3}</span>}
                    </div>
                )}
                {mediaURL4 && (
                    <div class="fa-02-image-container" style={{ backgroundImage: `url(${mediaURL4})` }}>
                        {mediaCaption4 && <span class="inner-caption-span">{mediaCaption4}</span>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Save;
