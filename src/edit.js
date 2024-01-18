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

    const onSelectImage1 = (media) => {
        setAttributes({
            mediaURL1: media.url,
            mediaID1: media.id,
            mediaCaption1: media.caption
        })
        console.log('Image 1 selected:', media);
        console.log(props)
    }
    const onSelectImage2 = (media) => {
        setAttributes({
            mediaURL2: media.url,
            mediaID2: media.id,
            mediaCaption2: media.caption
        })
    }
    const onSelectImage3 = (media) => {
        setAttributes({
            mediaURL3: media.url,
            mediaID3: media.id,
            mediaCaption3: media.caption
        })
    }
    const onSelectImage4 = (media) => {
        setAttributes({
            mediaURL4: media.url,
            mediaID4: media.id,
            mediaCaption4: media.caption
        })
    }

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
        <div {...blockProps} className="fa-02-block">
            <div className="fa-02-text-content">
                <RichText
                    tagName="h2"
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
                <div>
                    <strong>Captions:</strong>
                    <br />Caption 1: {mediaCaption1 || "None"}; Caption 2: {mediaCaption2 || "None"}; Caption 3: {mediaCaption3 || "None"}; Caption 4: {mediaCaption4 || "None"};
                </div>
                <div className="fa-02-button-container fa-02-edit-button-container">
                    <button className="fa-media-emphasis-block-btn wp-block-button__link wp-element-button">
                        {buttonText ? buttonText + " →" : "Read More →"}
                    </button>
                </div>
            </div>
            <div className="fa-02-gallery-container">
                <div class="fa-02-image-container fa-02-edit-image-container">
                    <MediaUpload
                        onSelect={onSelectImage1}
                        allowedTypes="image"
                        value={mediaID1}
                        render={({ open }) => (
                            <Button className={mediaID1 ? 'fa-02-img-btn image-button' : 'fa-02-img-btn button button-large'} onClick={open}>
                                {!mediaID1 ? __('Upload Image', 'femart-custom-block-02') : <img src={mediaURL1} className="fa-02-edit-image" alt={__('Upload Image', 'femart-custom-block-02')} />}
                            </Button>
                        )} />
                </div>
                <div class="fa-02-image-container fa-02-edit-image-container">
                    <MediaUpload
                        onSelect={onSelectImage2}
                        allowedTypes="image"
                        value={mediaID2}
                        render={({ open }) => (
                            <Button className={mediaID2 ? 'fa-02-img-btn image-button' : 'fa-02-img-btn button button-large'} onClick={open}>
                                {!mediaID2 ? __('Upload Image', 'femart-custom-block-02') : <img src={mediaURL2} className="fa-02-edit-image" alt={__('Upload Image', 'femart-custom-block-02')} />}
                            </Button>
                        )} />

                </div>
                <div class="fa-02-image-container fa-02-edit-image-container">
                    <MediaUpload
                        onSelect={onSelectImage3}
                        allowedTypes="image"
                        value={mediaID3}
                        render={({ open }) => (
                            <Button className={mediaID3 ? 'fa-02-img-btn image-button' : 'fa-02-img-btn button button-large'} onClick={open}>
                                {!mediaID3 ? __('Upload Image', 'femart-custom-block-02') : <img src={mediaURL3} className="fa-02-edit-image" alt={__('Upload Image', 'femart-custom-block-02')} />}
                            </Button>
                        )} />

                </div>
                <div class="fa-02-image-container fa-02-edit-image-container">
                    <MediaUpload
                        onSelect={onSelectImage4}
                        allowedTypes="image"
                        value={mediaID4}
                        render={({ open }) => (
                            <Button className={mediaID4 ? 'fa-02-img-btn image-button' : 'fa-02-img-btn button button-large'} onClick={open}>
                                {!mediaID4 ? __('Upload Image', 'femart-custom-block-02') : <img src={mediaURL4} className="fa-02-edit-image" alt={__('Upload Image', 'femart-custom-block-02')} />}
                            </Button>
                        )} />
                </div>
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
