/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, MediaUpload, useBlockProps } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

const Edit = (props) => {
    const {
        attributes: {
            title,
            buttonText,
            buttonURL,
            content,
            mediaID1,
            mediaURL1,
            mediaCaption1,
            mediaID2,
            mediaURL2,
            mediaCaption2,
            mediaID3,
            mediaURL3,
            mediaCaption3,
            mediaID4,
            mediaURL4,
            mediaCaption4
        },
        setAttributes,
    } = props;


    const blockProps = useBlockProps();

    const onChangeTitle = (value) => {
        setAttributes({ title: value });
    };

    const mediaCaptions = ["", "", "", ""]
    const onSelectImage = (media, index) => {
        switch (index) {
            case 0:
                setAttributes({
                    mediaURL1: media.url,
                    mediaID1: media.id,
                    mediaCaption1: media.caption
                })
                break
            case 1:
                setAttributes({
                    mediaURL2: media.url,
                    mediaID2: media.id,
                    mediaCaption2: media.caption
                })
                break
            case 2:
                setAttributes({
                    mediaURL3: media.url,
                    mediaID3: media.id,
                    mediaCaption3: media.caption
                })
                break
            case 3:
                setAttributes({
                    mediaURL4: media.url,
                    mediaID4: media.id,
                    mediaCaption4: media.caption
                })
                break
        }
        mediaCaptions[index] = media.caption
    };

    const onChangeContent = (value) => {
        setAttributes({ content: value });
    };

    const onChangeButtonURL = (value) => {
        setAttributes({ buttonURL: value });
    };

    const onChangeButtonText = (value) => {
        setAttributes({ buttonText: value });
    };

    return (
        <div {...blockProps} className="fa-02-container">
            <div className="fa-02-gallery-container">
                <MediaUpload
                    onSelect={(media) => onSelectImage(media, 0)}
                    allowedTypes="image"
                    value={mediaID1}
                    render={({ open }) => (
                        <Button className={mediaID1 ? 'image-button' : 'button button-large'} onClick={open}>
                            {!mediaID1 ? __('Upload Image', 'femart-custom-block-02') : <img src={mediaURL1} alt={__('Upload Image', 'femart-custom-block-02')} />}
                        </Button>
                    )} />
                <MediaUpload
                    onSelect={(media) => onSelectImage(media, 0)}
                    allowedTypes="image"
                    value={mediaID2}
                    render={({ open }) => (
                        <Button className={mediaID2 ? 'image-button' : 'button button-large'} onClick={open}>
                            {!mediaID2 ? __('Upload Image', 'femart-custom-block-02') : <img src={mediaURL2} alt={__('Upload Image', 'femart-custom-block-02')} />}
                        </Button>
                    )} />
                <MediaUpload
                    onSelect={(media) => onSelectImage(media, 0)}
                    allowedTypes="image"
                    value={mediaID2}
                    render={({ open }) => (
                        <Button className={mediaID2 ? 'image-button' : 'button button-large'} onClick={open}>
                            {!mediaID2 ? __('Upload Image', 'femart-custom-block-02') : <img src={mediaURL2} alt={__('Upload Image', 'femart-custom-block-02')} />}
                        </Button>
                    )} />
                <MediaUpload
                    onSelect={(media) => onSelectImage(media, 0)}
                    allowedTypes="image"
                    value={mediaID2}
                    render={({ open }) => (
                        <Button className={mediaID2 ? 'image-button' : 'button button-large'} onClick={open}>
                            {!mediaID2 ? __('Upload Image', 'femart-custom-block-02') : <img src={mediaURL2} alt={__('Upload Image', 'femart-custom-block-02')} />}
                        </Button>
                    )} />
            </div>

            {mediaCaptions.map((caption, index) => {
                return <div key={index}>Caption #{index + 1}: {caption ? caption : "None"}</div>
            })}
            <div className="fa-emphasis-block-text-container">
                <RichText
                    tagName="div"
                    multiline="p"
                    placeholder={__(
                        'Title',
                        'femart-custom-block-02'
                    )}
                    value={title}
                    onChange={onChangeTitle}
                />
                <RichText
                    tagName="div"
                    multiline="p"
                    placeholder={__(
                        'Content',
                        'femart-custom-block-02'
                    )}
                    value={content}
                    onChange={onChangeContent}
                />
            </div>
            <div className="fa-emphasis-block-button-container">
                <button className="fa-media-emphasis-block-btn wp-block-button__link wp-element-button">
                    {buttonText ? buttonText + " →" : "Read More →"}
                </button>
            </div>
            <InspectorControls>
                <PanelBody title="Button">
                    <TextControl
                        label="Link - Page Slug"
                        value={buttonURL}
                        onChange={onChangeButtonURL}
                    />
                    <TextControl
                        label="Text"
                        value={buttonText}
                        onChange={onChangeButtonText}
                    />
                </PanelBody>
            </InspectorControls>
        </div>
    );
};

export default Edit;
