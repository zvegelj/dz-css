import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType( 'w3/blocks-editable', {
        title: __( 'DZ.CSS block', 'w3' ),
        icon: 'universal-access-alt',
        category: 'layout',
        attributes: {
                content: {
                        type: 'array',
                        source: 'children',
                        selector: 'p',
                },
        },
        example: {
                attributes: {
                        content: __( 'Enter text' ),
                },
        },
        edit: ( props ) => {
                const {
                        attributes: { content },
                        setAttributes,
                        className,
                } = props;
                const onChangeContent = ( newContent ) => {
                        setAttributes( { content: newContent } );
                };
                return (
                        <RichText
                                tagName="p"
                                className={ className }
                                onChange={ onChangeContent }
                                value={ content }
                        />
                );
        },
        save: ( props ) => {
                return (
                        <RichText.Content tagName="p" value={ props.attributes.content } />
                );
        },
} );
registerBlockType( 'w3/btn', {
        title: __( 'W3-btn', 'w3' ),
        icon: 'button',
        category: 'layout',
        attributes: {
                content: {
                        type: 'array',
                        source: 'children',
                        selector: 'button',
                },
        },
        example: {
                attributes: {
                        content: __( 'Enter text' ),
                },
        },
        edit: ( props ) => {
                const {
                        attributes: { content },
                        setAttributes,
                        className,
                } = props;
                const onChangeContent = ( newContent ) => {
                        setAttributes( { content: newContent } );
                };
                return (
                        <RichText
                                tagName="button"
                                className={ className }
                                onChange={ onChangeContent }
                                value={ content }
                        />
                );
        },
        save: ( props ) => {
                return (
                        <RichText.Content tagName="button" value={ props.attributes.content } />
                );
        },
} );

registerBlockType( 'w3/container', {
        title: __( 'W3 Container', 'w3' ),
        icon: 'header',
        category: 'layout',
        attributes: {
                content: {
                        type: 'array',
                        source: 'children',
                        selector: 'header',
                },
        },
        example: {
                attributes: {
                        content: __( 'Enter text' ),
                },
        },
        edit: ( props ) => {
                const {
                        attributes: { content },
                        setAttributes,
                        className,
                } = props;
                const onChangeContent = ( newContent ) => {
                        setAttributes( { content: newContent } );
                };
                return (
                        <RichText
                                tagName="header"
                                className={ className }
                                onChange={ onChangeContent }
                                value={ content }
                        />
                );
        },
        save: ( props ) => {
                return (
                        <RichText.Content tagName="header" value={ props.attributes.content } />
                );
        },
} );
registerBlockType( 'w3/h1', {
        title: __( 'h1', 'w3' ),
        icon: 'minus',
        category: 'layout',
        attributes: {
                content: {
                        type: 'array',
                        source: 'children',
                        selector: 'h1',
                },
        },
        example: {
                attributes: {
                        content: __( 'Enter text' ),
                },
        },
        edit: ( props ) => {
                const {
                        attributes: { content },
                        setAttributes,
                        className,
                } = props;
                const onChangeContent = ( newContent ) => {
                        setAttributes( { content: newContent } );
                };
                return (
                        <RichText
                                tagName="h1"
                                className={ className }
                                onChange={ onChangeContent }
                                value={ content }
                        />
                );
        },
        save: ( props ) => {
                return (
                        <RichText.Content tagName="h1" value={ props.attributes.content } />
                );
        },
} );

registerBlockType( 'w3/h2', {
        title: __( 'W3-h2', 'w3' ),
        icon: 'minus',
        category: 'layout',
        attributes: {
                content: {
                        type: 'array',
                        source: 'children',
                        selector: 'h2',
                },
        },
        example: {
                attributes: {
                        content: __( 'Enter text' ),
                },
        },
        edit: ( props ) => {
                const {
                        attributes: { content },
                        setAttributes,
                        className,
                } = props;
                const onChangeContent = ( newContent ) => {
                        setAttributes( { content: newContent } );
                };
                return (
                        <RichText
                                tagName="h2"
                                className={ className }
                                onChange={ onChangeContent }
                                value={ content }
                        />
                );
        },
        save: ( props ) => {
                return (
                        <RichText.Content tagName="h2" value={ props.attributes.content } />
                );
        },
} );


