initSidebarItems({"constant":[["MZ_ADLER32_INIT",""],["MZ_BLOCK",""],["MZ_CRC32_INIT",""],["MZ_DEFAULT_STRATEGY",""],["MZ_DEFAULT_WINDOW_BITS",""],["MZ_DEFLATED",""],["MZ_FILTERED",""],["MZ_FINISH",""],["MZ_FIXED",""],["MZ_FULL_FLUSH",""],["MZ_HUFFMAN_ONLY",""],["MZ_NO_FLUSH",""],["MZ_PARTIAL_FLUSH",""],["MZ_RLE",""],["MZ_SYNC_FLUSH",""]],"fn":[["miniz_def_alloc_func",""],["miniz_def_free_func",""],["miniz_def_realloc_func",""],["mz_adler32",""],["mz_adler32_oxide",""],["mz_compress",""],["mz_compress2",""],["mz_compressBound",""],["mz_crc32",""],["mz_crc32_oxide",""],["mz_deflate",""],["mz_deflateBound",""],["mz_deflateEnd",""],["mz_deflateInit",""],["mz_deflateInit2",""],["mz_deflateReset",""],["mz_inflate",""],["mz_inflateEnd",""],["mz_inflateInit",""],["mz_inflateInit2",""],["mz_uncompress",""],["tdefl_compress",""],["tdefl_compress_buffer",""],["tdefl_compress_mem_to_heap",""],["tdefl_compress_mem_to_mem",""],["tdefl_compress_mem_to_output",""],["tdefl_create_comp_flags_from_zip_params",""],["tdefl_get_adler32",""],["tdefl_get_prev_return_status",""],["tdefl_init",""],["tinfl_decompress",""],["tinfl_decompress_mem_to_heap","Decompress data from `p_src_buf` to a continuously growing heap-allocated buffer."],["tinfl_decompress_mem_to_mem",""]],"macro":[["unmangle","Unmangle the wrapped functions if no_c_export is not defined. For benchmarks, and other comparisons where we want to have both the miniz and miniz_oxide functions available, functions shouldn not be marked `no_mangle` since that will cause conflicts."]],"mod":[["lib_oxide","This module mainly contains functionality replicating the miniz higher level API."]],"struct":[["tdefl_compressor","Main compression struct. Not the same as `CompressorOxide`"],["tinfl_decompressor","Main decompression struct."]]});