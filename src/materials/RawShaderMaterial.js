import { ShaderMaterial } from './ShaderMaterial';

/**
 * @author mrdoob / http://mrdoob.com/
 *
 * parameters = {
 *  prefixVertex: <Function>,
 *  prefixFragment: <Function>
 * }
 */

function RawShaderMaterial( parameters ) {

	// Hooks get called on material creation
	// fn( renderer, material, parameters )
	// @return value: shader code (string)
	this.prefixVertex = null;
	this.prefixFragment = null;

	ShaderMaterial.call( this, parameters );

	this.type = 'RawShaderMaterial';

}

RawShaderMaterial.prototype = Object.create( ShaderMaterial.prototype );
RawShaderMaterial.prototype.constructor = RawShaderMaterial;

RawShaderMaterial.prototype.isRawShaderMaterial = true;


export { RawShaderMaterial };
