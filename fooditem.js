<!DOCTYPE html>
<!-- saved from url=(0062)https://github.com/Ahmad528/shoppingsite/blob/main/fooditem.js -->
<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark" data-a11y-animated-images="system" data-a11y-link-underlines="true" data-turbo-loaded="" class="js-focus-visible" data-js-focus-visible=""><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">.turbo-progress-bar {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  height: 3px;
  background: #00a2ff;
  z-index: 2147483647;
  transition:
    width 300ms ease-out,
    opacity 150ms 150ms ease-in;
  transform: translate3d(0, 0, 0);
}
</style>
    
  
  
  
  
  
  

  

  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/light-7aa84bb7e11e.css"><link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/dark-f65db3e8d171.css"><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-a8258e3c6dda.css"><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-7e97d834719c.css"><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-01d869f460be.css"><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-534f3e971240.css"><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-a8cc7d138001.css"><link data-color-theme="light_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia-35e9dfdc4f9f.css"><link data-color-theme="dark_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia-cf4cc5f62dfe.css">

    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/primer-primitives-d9abecd14f1e.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/primer-93aded0ee8a1.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/global-1f2860c46060.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/github-3615e10af1e8.css">
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/repository-4fce88777fa8.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/code-0210be90f4d3.css">

  


  <script type="application/json" id="client-env">{"locale":"en","featureFlags":["allow_subscription_halted_error","bypass_copilot_indexing_quota","copilot_immersive_file_preview","copilot_new_references_ui","copilot_attach_folder_reference","copilot_chat_repo_custom_instructions_preview","copilot_chat_retry_on_error","copilot_chat_persist_submitted_input","copilot_conversational_ux_history_refs","copilot_chat_shared_topic_indicator","copilot_chat_shared_repo_sso_banner","copilot_editor_upsells","copilot_dotcom_chat_reduce_telemetry","copilot_free_limited_user","copilot_implicit_context","copilot_no_floating_button","copilot_smell_icebreaker_ux","copilot_diff_chat_tanstack","copilot_new_markdown_renderer","experimentation_azure_variant_endpoint","failbot_handle_non_errors","geojson_azure_maps","ghost_pilot_confidence_truncation_25","ghost_pilot_confidence_truncation_40","github_models_gateway","github_models_o3_mini_streaming","github_models_per_chunk_timeout","hovercard_accessibility","issues_advanced_search","issues_react_close_as_duplicate","issues_react_remove_placeholders","issues_react_blur_item_picker_on_close","issues_react_include_bots_in_pickers","marketing_pages_search_explore_provider","remove_child_patch","repository_suggester_elastic_search","sample_network_conn_type","site_copilot_acc","site_copilot_vscode_link_update","site_proxima_australia_update","issues_react_close_as_duplicate","issues_react_create_milestone","issues_react_cache_fix_workaround","lifecycle_label_name_updates","item_picker_new_select_panel"],"login":"AnanyaBansal28"}</script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/wp-runtime-2935d47f524c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_oddbird_popover-polyfill_dist_popover_js-9da652f58479.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_arianotify-polyfill_ariaNotify-polyfill_js-node_modules_github_mi-3abb8f-d7e6bc799724.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_failbot_failbot_ts-25697e0f4c47.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/environment-04ca94cb6e8a.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_primer_behaviors_dist_esm_index_mjs-0dbb79f97f8f.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_selector-observer_dist_index_esm_js-f690fd9ae3d5.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_relative-time-element_dist_index_js-f6da4b3fa34c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_auto-complete-element_dist_index_js-node_modules_github_catalyst_-8e9f78-a74b4e0a8a6b.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_text-expander-element_dist_index_js-78748950cb0c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-b5f1d7-a1760ffda83d.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_markdown-toolbar-element_dist_index_js-ceef33f593fa.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-c44a69-f0c8a795d1fd.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/github-elements-90f965d59632.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/element-registry-d018d1dc6e26.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_braintree_browser-detection_dist_browser-detection_js-node_modules_githu-bb80ec-72267f4e3ff9.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_lit-html_lit-html_js-be8cb88f481b.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_morphdom_dist_morphdom-e-7c534c-a4a1922eb55f.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js-e3cbe28f1638.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-893f9f-6cf3320416b8.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_color-convert_index_js-e3180fe3bcb3.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_quote-selection_dist_index_js-node_modules_github_session-resume_-69cfcc-ccab506ecf8c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_updatable-content_updatable-content_ts-439f48470426.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_sso_ts-ui_packages-900dde-03160297135f.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/app_assets_modules_github_sticky-scroll-into-view_ts-5316a27f9573.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-87a4ae-0a6bb0ce2586.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235-42e06545c1fa.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/behaviors-39dbc070de8b.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-f6223d90c7ba.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/notifications-global-197c9e29d935.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js-96453a51f920.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-70450e-eecf0d50276f.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/app_assets_modules_github_ref-selector_ts-67ecc525841a.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/codespaces-ebbd143cbdba.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-3eebbd-0763620ad7bf.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_delegated-events_di-e161aa-9d41fb1b6c9e.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_github_remote--3c9c82-7238cfcdaa51.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/repositories-641812d2f626.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_catalyst_lib_inde-dbbea9-26cce2010167.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/code-menu-32e8c76a1001.js.download"></script>
  
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/primer-react.077d61b47e93f8c5e577.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/notifications-subscriptions-menu.1bcff9205c241e99cff2.module.css">


  



  
  
  

    
  


  


    


  
  

  
  

    



  

  




    

  

    

    

      

      

    
    
    

      
  
  


      
      


      


      
      
      

        


  <meta http-equiv="x-pjax-version" content="9c582da6ac134ec6c0ab09eb46c7d23774d9fbf5bbdaf81d385ce82d54c716c8" data-turbo-track="reload">
  <meta http-equiv="x-pjax-csp-version" content="ace39c3b6632770952207593607e6e0be0db363435a8b877b1f96abe6430f345" data-turbo-track="reload">
  <meta http-equiv="x-pjax-css-version" content="ed43ec61136ad22052939bdd575f56bb76c5df17f8023f22415418bf031f0da5" data-turbo-track="reload">
  <meta http-equiv="x-pjax-js-version" content="124881a0d4e1254efbeb8af4d1953d1751590aea5d299959dc582ef0e202d754" data-turbo-track="reload">

  

      
  

  



      


    


  

  

  
  
  




  
  

  

  <style data-styled="active" data-styled-version="5.3.11"></style><style id="ms-consent-banner-main-styles">.w8hcgFksdo30C8w-bygqu{color:#000}.ydkKdaztSS0AeHWIeIHsQ a{color:#0067B8}.erL690_8JwUW-R4bJRcfl{background-color:#EBEBEB;border:none;color:#000}.erL690_8JwUW-R4bJRcfl:enabled:hover{color:#000;background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}.erL690_8JwUW-R4bJRcfl:enabled:focus{background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}.erL690_8JwUW-R4bJRcfl:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2);border:none}._1zNQOqxpBFSokeCLGi_hGr{border:none;background-color:#0067B8;color:#fff}._1zNQOqxpBFSokeCLGi_hGr:enabled:hover{color:#fff;background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}._1zNQOqxpBFSokeCLGi_hGr:enabled:focus{background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}._1zNQOqxpBFSokeCLGi_hGr:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,120,215,0.2);border:none}._23tra1HsiiP6cT-Cka-ycB{position:relative;display:flex;z-index:9999;width:100%;background-color:#F2F2F2;justify-content:space-between;text-align:left}div[dir="rtl"]._23tra1HsiiP6cT-Cka-ycB{text-align:right}._1Upc2NjY8AlDn177YoVj0y{margin:0;padding-left:5%;padding-top:8px;padding-bottom:8px}div[dir="rtl"] ._1Upc2NjY8AlDn177YoVj0y{margin:0;padding:8px 5% 8px 0;float:none}._23tra1HsiiP6cT-Cka-ycB svg{fill:none;max-width:none;max-height:none}._1V_hlU-7jdtPiooHMu89BB{display:table-cell;padding:12px;width:24px;height:24px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:24px;line-height:0}.f6QKJD7fhSbnJLarTL-W-{display:table-cell;vertical-align:middle;padding:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:16px}.f6QKJD7fhSbnJLarTL-W- a{text-decoration:underline}._2j0fmugLb1FgYz6KPuB91w{display:inline-block;margin-left:5%;margin-right:5%;min-width:40%;min-width:calc((150px + 3 * 4px) * 2 + 150px);min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;align-self:center;position:relative}._1XuCi2WhiqeWRUVp3pnFG3{margin:4px;padding:5px;min-width:150px;min-height:36px;vertical-align:top;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._1XuCi2WhiqeWRUVp3pnFG3:focus{box-sizing:border-box}._1XuCi2WhiqeWRUVp3pnFG3:disabled{cursor:not-allowed}._2bvsb3ubApyZ0UGoQA9O9T{display:block;position:fixed;z-index:10000;top:0;left:0;width:100%;height:100%;background-color:rgba(255,255,255,0.6);overflow:auto;text-align:left}div[dir="rtl"]._2bvsb3ubApyZ0UGoQA9O9T{text-align:right}div[dir="rtl"] ._2bvsb3ubApyZ0UGoQA9O9T{left:auto;right:0}.AFsJE948muYyzCMktdzuk{position:relative;top:8%;margin-bottom:40px;margin-left:auto;margin-right:auto;box-sizing:border-box;width:640px;background-color:#fff;border:1px solid #0067B8}._3kWyBRbW_dgnMiEyx06Fu4{float:right;z-index:1;margin:2px;padding:12px;border:none;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:13px;display:flex;align-items:center;text-align:center;color:#666;background-color:#fff}div[dir="rtl"] ._3kWyBRbW_dgnMiEyx06Fu4{margin:2px;padding:12px;float:left}.uCYvKvHXrhjNgflv1VqdD{position:static;margin-top:36px;margin-left:36px;margin-right:36px}._17pX1m9O_W--iZbDt3Ta5r{margin-top:0;margin-bottom:12px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:20px;line-height:24px;text-transform:none}._1kBkHQ1V1wu3kl-YcLgUr6{height:446px;overflow:auto}._20_nXDf6uFs9Q6wxRXG-I-{margin-top:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._20_nXDf6uFs9Q6wxRXG-I- a{text-decoration:underline}dl._2a0NH_GDQEQe5Ynfo7suVH{margin-top:36px;margin-bottom:0;padding:0;list-style:none;text-transform:none}dt._3j_LCPv7fyXv3A8FIXVwZ4{margin-top:20px;float:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;list-style:none}.k-vxTGFbdq1aOZB2HHpjh{margin:0;padding:0;border:none}._2Bucyy75c_ogoU1g-liB5R{margin:0;padding:0;border-bottom:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;text-transform:none}._63gwfzV8dclrsl2cfd90r{display:inline-block;margin-top:0;margin-bottom:13px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._1l8wM_4mRYGz3Iu7l3BZR7{display:block}._2UE03QS02aZGkslegN_F-i{display:inline-block;position:relative;left:5px;margin-bottom:13px;margin-right:34px;padding:3px}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{margin:0 0 13px 34px;padding:3px;float:none}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{left:auto;right:5px}._23tra1HsiiP6cT-Cka-ycB *::before,._2bvsb3ubApyZ0UGoQA9O9T *::before,._23tra1HsiiP6cT-Cka-ycB *::after,._2bvsb3ubApyZ0UGoQA9O9T *::after{box-sizing:inherit}._1HSFn0HzGo6w4ADApV8-c4{outline:2px solid rgba(0,0,0,0.8)}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2{display:inline-block;position:relative;margin-top:0;margin-left:0;margin-right:0;height:0;width:0;border-radius:0;cursor:pointer;outline:none;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{display:block;position:absolute;top:5px;left:3px;height:19px;width:19px;content:"";border-radius:50%;border:1px solid #000;background-color:#fff}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{left:auto;right:3px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:rgba(0,0,0,0.8)}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label{cursor:not-allowed}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label::before{border:1px solid rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2)}._3RJzeL3l9Rl_lAQEm6VwdX{display:block;position:static;float:right;margin-top:0;margin-bottom:0;margin-left:19px;margin-right:0;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:0;width:80%;width:calc(100% - 19px);font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-transform:none;cursor:pointer;box-sizing:border-box}div[dir="rtl"] ._3RJzeL3l9Rl_lAQEm6VwdX{margin:0 19px 0 0;padding:0 8px 0 0;float:left}.nohp3sIG12ZBhzcMnPala{margin-top:20px;margin-bottom:48px}._2uhaEsmeotZ3P-M0AXo2kF{padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._2uhaEsmeotZ3P-M0AXo2kF:focus{box-sizing:border-box}._2uhaEsmeotZ3P-M0AXo2kF:disabled{cursor:not-allowed}._3tOu1FJ59c_xz_PmI1lKV5{float:right;padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._3tOu1FJ59c_xz_PmI1lKV5:focus{box-sizing:border-box}._3tOu1FJ59c_xz_PmI1lKV5:disabled{cursor:not-allowed}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0;padding:0;float:left}@media only screen and (max-width: 768px){._2j0fmugLb1FgYz6KPuB91w,._1Upc2NjY8AlDn177YoVj0y{padding-top:8px;padding-bottom:12px;padding-left:3.75%;padding-right:3.75%;margin:0;width:92.5%}._23tra1HsiiP6cT-Cka-ycB{display:block}._1XuCi2WhiqeWRUVp3pnFG3{margin-bottom:8px;margin-left:0;margin-right:0;width:100%}._2bvsb3ubApyZ0UGoQA9O9T{overflow:hidden}.AFsJE948muYyzCMktdzuk{top:1.8%;width:93.33%;height:96.4%;overflow:hidden}.uCYvKvHXrhjNgflv1VqdD{margin-top:24px;margin-left:24px;margin-right:24px;height:100%}._1kBkHQ1V1wu3kl-YcLgUr6{height:62%;height:calc(100% - 188px);min-height:50%}._2uhaEsmeotZ3P-M0AXo2kF{width:100%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:12px;margin-left:0;width:100%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 12px 0;padding:0;float:none}}@media only screen and (max-width: 768px) and (orientation: landscape), only screen and (max-height: 260px), only screen and (max-width: 340px){.AFsJE948muYyzCMktdzuk{overflow:auto}}@media only screen and (max-height: 260px), only screen and (max-width: 340px){._1XuCi2WhiqeWRUVp3pnFG3{min-width:0}._3kWyBRbW_dgnMiEyx06Fu4{padding:3%}.uCYvKvHXrhjNgflv1VqdD{margin-top:3%;margin-left:3%;margin-right:3%}._17pX1m9O_W--iZbDt3Ta5r{margin-bottom:3%}._1kBkHQ1V1wu3kl-YcLgUr6{height:calc(79% - 64px)}.nohp3sIG12ZBhzcMnPala{margin-top:5%;margin-bottom:10%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:3%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 3% 0;padding:0;float:none}}
</style><style type="text/css" id="ms-consent-banner-theme-styles">._23tra1HsiiP6cT-Cka-ycB {
            background-color: #24292f !important;
        }.w8hcgFksdo30C8w-bygqu {
            color: #ffffff !important;
        }.ydkKdaztSS0AeHWIeIHsQ a {
            color: #d8b9ff !important;
        }._2bvsb3ubApyZ0UGoQA9O9T {
            background-color: rgba(23, 23, 23, 0.8) !important;
        }.AFsJE948muYyzCMktdzuk {
            background-color: #24292f !important;
            border: 1px solid #d8b9ff !important;
        }._3kWyBRbW_dgnMiEyx06Fu4 {
            color: #d8b9ff !important;
            background-color: #24292f !important;
        }._1zNQOqxpBFSokeCLGi_hGr {
            border: 1px solid #ffffff !important;
            background-color: #ffffff !important;
            color: #1f2328 !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:hover {
            color: #1f2328 !important;
            background-color: #d8b9ff !important;
            box-shadow: none !important;
            border: 1px solid transparent !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:focus {
            background-color: #d8b9ff !important;
            box-shadow: none !important;
            border: 2px solid #ffffff !important;
        }._1zNQOqxpBFSokeCLGi_hGr:disabled {
            opacity: 0.5 !important;
            color: #1f2328 !important;
            background-color: #ffffff !important;
            border: 1px solid transparent !important;
        }.erL690_8JwUW-R4bJRcfl {
            border: 1px solid #eaeef2 !important;
            background-color: #32383f !important;
            color: #ffffff !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:hover {
            color: #ffffff !important;
            background-color: #24292f !important;
            box-shadow: none !important;
            border: 1px solid #ffffff !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:focus {
            background-color: #24292f !important;
            box-shadow: none !important;
            border: 2px solid #6e7781 !important;
        }.erL690_8JwUW-R4bJRcfl:disabled {
            opacity: 0.5 !important;
            color: #ffffff !important;
            background-color: #424a53 !important;
            border: 1px solid #6e7781 !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label::before {
            border: 1px solid #d8b9ff !important;
            background-color: #24292f !important;
        }._1HSFn0HzGo6w4ADApV8-c4 {
            outline: 2px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked + label::after {
            background-color: #d8b9ff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::before {
            border: 1px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::after {
            background-color: #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::before {
            border: 1px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::after {
            background-color: #d8b9ff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled + label::before {
            border: 1px solid rgba(227, 227, 227, 0.2) !important;
            background-color: rgba(227, 227, 227, 0.2) !important;
        }</style><link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/react-code-view.ab7d8fac328c00e5e0cc.module.css"><script type="application/json" id="client-env">{"locale":"en","featureFlags":["allow_subscription_halted_error","bypass_copilot_indexing_quota","copilot_immersive_file_preview","copilot_new_references_ui","copilot_attach_folder_reference","copilot_chat_repo_custom_instructions_preview","copilot_chat_retry_on_error","copilot_chat_persist_submitted_input","copilot_conversational_ux_history_refs","copilot_chat_shared_topic_indicator","copilot_chat_shared_repo_sso_banner","copilot_editor_upsells","copilot_dotcom_chat_reduce_telemetry","copilot_free_limited_user","copilot_implicit_context","copilot_no_floating_button","copilot_smell_icebreaker_ux","copilot_diff_chat_tanstack","copilot_new_markdown_renderer","experimentation_azure_variant_endpoint","failbot_handle_non_errors","geojson_azure_maps","ghost_pilot_confidence_truncation_25","ghost_pilot_confidence_truncation_40","github_models_gateway","github_models_o3_mini_streaming","github_models_per_chunk_timeout","hovercard_accessibility","issues_advanced_search","issues_react_close_as_duplicate","issues_react_remove_placeholders","issues_react_blur_item_picker_on_close","issues_react_include_bots_in_pickers","marketing_pages_search_explore_provider","remove_child_patch","repository_suggester_elastic_search","sample_network_conn_type","swp_enterprise_contact_form","site_copilot_acc","site_copilot_vscode_link_update","site_proxima_australia_update","issues_react_close_as_duplicate","issues_react_create_milestone","issues_react_cache_fix_workaround","lifecycle_label_name_updates","item_picker_new_select_panel"],"login":"AnanyaBansal28"}</script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/primer-react-8ce8f9e2d741.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/react-core-3c3b41159c53.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/react-lib-f09868a8643f.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/octicons-react-611691cca2f6.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-62da9f-2df2f32ec596.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-e7dcdd-f7cc96ebae76.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js-55fea94174bf.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_dompurify_dist_purify_js-b89b98661809.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_primer_live-region-element_dist_esm_index_js-node_modules_tanstack_query-1fdea8-83f2f37789a4.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_lodash-es__Stack_js-node_modules_lodash-es__Uint8Array_js-node_modules_l-4faaa6-4a736fde5c2f.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_lodash-es__baseIsEqual_js-8929eb9718d5.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_hydro-analytics-client_dist_analytics-client_js-node_modules_gith-853b24-f2006d2a5b98.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_aria-live_aria-live_ts-ui_packages_promise-with-resolvers-polyfill_promise-with-r-014121-adb7f840e9e5.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_paths_index_ts-4558f7eebed5.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_ref-selector_RefSelector_tsx-cf992e819493.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-530254-a7bdad87b7b4.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_code-view-shared_hooks_use-canonical-object_ts-ui_packages_code-view-shared_utili-34a797-4779fedaf5dc.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_code-view-shared_hooks_use-file-page-payload_ts-ui_packages_code-view-shared_comp-f30c4b-6d75a2e83d01.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/app_assets_modules_github_blob-anchor_ts-ui_packages_code-nav_code-nav_ts-ui_packages_filter--8253c1-6e376eb94aa9.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/react-code-view-83c374e9507c.js.download"></script><link rel="dns-prefetch" href="https://github.githubassets.com/"><link rel="dns-prefetch" href="https://avatars.githubusercontent.com/"><link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com/"><link rel="dns-prefetch" href="https://user-images.githubusercontent.com/"><link rel="preconnect" href="https://github.githubassets.com/" crossorigin=""><link rel="preconnect" href="https://avatars.githubusercontent.com/"><title>shoppingsite/fooditem.js at main · Ahmad528/shoppingsite</title><meta name="route-pattern" content="/:user_id/:repository/blob/*name(/*path)" data-turbo-transient=""><meta name="route-controller" content="blob" data-turbo-transient=""><meta name="route-action" content="show" data-turbo-transient=""><meta name="current-catalog-service-hash" content="f3abb0cc802f3d7b95fc8762b94bdcb13bf39634c40c357301c4aa1d67a256fb"><meta name="request-id" content="F022:36BEC2:1B64326:1F35353:67A5D081" data-turbo-transient="true"><meta name="html-safe-nonce" content="dbe26730e7266916e91524a9a54e144102ff0f71b6867f856f6b931a3d79e1be" data-turbo-transient="true"><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9BaG1hZDUyOC9zaG9wcGluZ3NpdGUvYmxvYi9tYWluL2Zvb2RpdGVtLmpzIiwicmVxdWVzdF9pZCI6IkYwMjI6MzZCRUMyOjFCNjQzMjY6MUYzNTM1Mzo2N0E1RDA4MSIsInZpc2l0b3JfaWQiOiI0ODI3NzI0OTc4MDE1MzA0NDciLCJyZWdpb25fZWRnZSI6InNvdXRoZWFzdGFzaWEiLCJyZWdpb25fcmVuZGVyIjoiaWFkIn0=" data-turbo-transient="true"><meta name="visitor-hmac" content="99d840fc485c1243f11729079c00dc925a8f9fad1cd994dd0ca3df514cf3d819" data-turbo-transient="true"><meta name="hovercard-subject-tag" content="repository:416351968" data-turbo-transient=""><meta name="github-keyboard-shortcuts" content="repository,source-code,file-tree,copilot" data-turbo-transient="true"><meta name="selected-link" value="repo_source" data-turbo-transient=""><link rel="assets" href="https://github.githubassets.com/"><meta name="google-site-verification" content="Apib7-x98H0j5cPqHWwSMm6dNU4GmODRoqxLiDzdx9I"><meta name="octolytics-url" content="https://collector.github.com/github/collect"><meta name="octolytics-actor-id" content="195284315"><meta name="octolytics-actor-login" content="AnanyaBansal28"><meta name="octolytics-actor-hash" content="bc6b7182128df6b004e79ecddd084311bcf72e057a6692dfbb34262d67f19c95"><meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-turbo-transient="true"><meta name="user-login" content="AnanyaBansal28"><link rel="sudo-modal" href="https://github.com/sessions/sudo_modal"><meta name="turbo-cache-control" content="no-preview" data-turbo-transient=""><meta name="turbo-cache-control" content="no-cache" data-turbo-transient=""><meta data-hydrostats="publish"><meta name="go-import" content="github.com/Ahmad528/shoppingsite git https://github.com/Ahmad528/shoppingsite.git"><meta name="octolytics-dimension-user_id" content="68517660"><meta name="octolytics-dimension-user_login" content="Ahmad528"><meta name="octolytics-dimension-repository_id" content="416351968"><meta name="octolytics-dimension-repository_nwo" content="Ahmad528/shoppingsite"><meta name="octolytics-dimension-repository_public" content="true"><meta name="octolytics-dimension-repository_is_fork" content="false"><meta name="octolytics-dimension-repository_network_root_id" content="416351968"><meta name="octolytics-dimension-repository_network_root_nwo" content="Ahmad528/shoppingsite"><meta name="turbo-body-classes" content="logged-in env-production page-responsive"><meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats"><meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors"><link rel="mask-icon" href="https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg" color="#000000"><link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png"><link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg" data-base-href="https://github.githubassets.com/favicons/favicon"><meta name="theme-color" content="#1e2327"><meta name="color-scheme" content="light dark"><meta name="msapplication-TileImage" content="/windows-tile.png"><meta name="msapplication-TileColor" content="#ffffff"><link rel="manifest" href="https://github.com/manifest.json" crossorigin="use-credentials"><style type="text/css" id="ms-consent-banner-theme-styles"></style></head>

  <body class="logged-in env-production page-responsive" style="overflow-wrap: break-word; --dialog-scrollgutter: 15px;">
    <div data-turbo-body="" class="logged-in env-production page-responsive" style="word-wrap: break-word;">
      


    <div class="position-relative header-wrapper js-header-wrapper ">
      <a href="https://github.com/Ahmad528/shoppingsite/blob/main/fooditem.js#start-of-content" data-skip-target-assigned="false" class="p-3 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content">Skip to content</a>

      <span data-view-component="true" class="progress-pjax-loader Progress position-fixed width-full">
    <span style="width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"></span>
</span>      
      
      <script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_ui-commands_ui-commands_ts-ac3420ecd15f.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/keyboard-shortcuts-dialog-ed3dc063d8a1.js.download"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/primer-react.077d61b47e93f8c5e577.module.css">

<react-partial partial-name="keyboard-shortcuts-dialog" data-ssr="false" data-attempted-ssr="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"docsUrl":"https://docs.github.com/get-started/accessibility/keyboard-shortcuts"}}</script>
  <div data-target="react-partial.reactRoot"><div class="d-none"></div><script type="application/json" id="__PRIMER_DATA_:rt:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>




      

          

              <header class="AppHeader" role="banner">
  <h2 class="sr-only">Navigation Menu</h2>

    

    <div class="AppHeader-globalBar pb-2 js-global-bar">
      <div class="AppHeader-globalBar-start">
          <deferred-side-panel data-url="/_side-panels/global" data-catalyst="">
  <include-fragment data-target="deferred-side-panel.fragment"><template shadowrootmode="open"><style>:host {display: block;}</style><slot></slot></template>
      <button aria-label="Open global navigation menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-271c199a-d8d0-407d-8a88-aed27ddc2377" id="dialog-show-dialog-271c199a-d8d0-407d-8a88-aed27ddc2377" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button p-0 color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-three-bars Button-visual">
    <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
</svg>
</button>

<dialog-helper>
  <dialog data-target="deferred-side-panel.panel" id="dialog-271c199a-d8d0-407d-8a88-aed27ddc2377" aria-modal="true" aria-labelledby="dialog-271c199a-d8d0-407d-8a88-aed27ddc2377-title" aria-describedby="dialog-271c199a-d8d0-407d-8a88-aed27ddc2377-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade Overlay--placement-left SidePanel Overlay--disableScroll">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-271c199a-d8d0-407d-8a88-aed27ddc2377-title">
        Global navigation
      </h1>
            <div data-view-component="true" class="d-flex">
      <div data-view-component="true" class="AppHeader-logo position-relative">
        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
</svg>
</div></div>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="dialog-271c199a-d8d0-407d-8a88-aed27ddc2377" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="dialog-271c199a-d8d0-407d-8a88-aed27ddc2377-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body d-flex flex-column px-2">    <div data-view-component="true" class="d-flex flex-column mb-3">
        <nav aria-label="Site navigation" data-view-component="true" class="ActionList">
  
  <nav-list data-catalyst="">
    <ul data-target="nav-list.topLevelList" data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-hotkey="g d" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;HOME&quot;,&quot;label&quot;:null}" id="item-0c233327-28d8-4bb6-8c03-735b1e41382c" href="https://github.com/dashboard" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-home">
    <path d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Home
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES&quot;,&quot;label&quot;:null}" id="item-afbe95fc-d2fe-4215-8ebb-0d79431f3d7a" href="https://github.com/issues" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Issues
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS&quot;,&quot;label&quot;:null}" id="item-6ff54fd1-4a74-4759-a42b-890354dc182b" href="https://github.com/pulls" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Pull requests
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PROJECTS&quot;,&quot;label&quot;:null}" id="item-7b1d49bd-fa97-4ad6-8c76-a14013f2ef31" href="https://github.com/projects" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Projects
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DISCUSSIONS&quot;,&quot;label&quot;:null}" id="item-5c79530d-2755-446f-bb46-5befa3dbdf86" href="https://github.com/discussions" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment-discussion">
    <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Discussions
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;CODESPACES&quot;,&quot;label&quot;:null}" id="item-374461a8-d7b3-4186-bf17-c6a34f74eb4d" href="https://github.com/codespaces" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-codespaces">
    <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Codespaces
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;COPILOT&quot;,&quot;label&quot;:null}" id="item-2f29a164-aa3f-4a2c-83a2-fb16fa23138d" href="https://github.com/copilot" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copilot">
    <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Copilot
</span>      
</a>
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;EXPLORE&quot;,&quot;label&quot;:null}" id="item-dfae2918-6129-46ef-8618-a3d28521bba4" href="https://github.com/explore" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-telescope">
    <path d="M14.184 1.143v-.001l1.422 2.464a1.75 1.75 0 0 1-.757 2.451L3.104 11.713a1.75 1.75 0 0 1-2.275-.702l-.447-.775a1.75 1.75 0 0 1 .53-2.32L11.682.573a1.748 1.748 0 0 1 2.502.57Zm-4.709 9.32h-.001l2.644 3.863a.75.75 0 1 1-1.238.848l-1.881-2.75v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.049-2.992a.746.746 0 0 1 .293-.253l1.809-.87a.749.749 0 0 1 .944.252ZM9.436 3.92h-.001l-4.97 3.39.942 1.63 5.42-2.61Zm3.091-2.108h.001l-1.85 1.26 1.505 2.605 2.016-.97a.247.247 0 0 0 .13-.151.247.247 0 0 0-.022-.199l-1.422-2.464a.253.253 0 0 0-.161-.119.254.254 0 0 0-.197.038ZM1.756 9.157a.25.25 0 0 0-.075.33l.447.775a.25.25 0 0 0 .325.1l1.598-.769-.83-1.436-1.465 1Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Explore
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;MARKETPLACE&quot;,&quot;label&quot;:null}" id="item-d9793d09-1f69-43f9-9a8e-8b6186af72f6" href="https://github.com/marketplace" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-gift">
    <path d="M2 2.75A2.75 2.75 0 0 1 4.75 0c.983 0 1.873.42 2.57 1.232.268.318.497.668.68 1.042.183-.375.411-.725.68-1.044C9.376.42 10.266 0 11.25 0a2.75 2.75 0 0 1 2.45 4h.55c.966 0 1.75.784 1.75 1.75v2c0 .698-.409 1.301-1 1.582v4.918A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V9.332C.409 9.05 0 8.448 0 7.75v-2C0 4.784.784 4 1.75 4h.55c-.192-.375-.3-.8-.3-1.25ZM7.25 9.5H2.5v4.75c0 .138.112.25.25.25h4.5Zm1.5 0v5h4.5a.25.25 0 0 0 .25-.25V9.5Zm0-4V8h5.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Zm-7 0a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h5.5V5.5h-5.5Zm3-4a1.25 1.25 0 0 0 0 2.5h2.309c-.233-.818-.542-1.401-.878-1.793-.43-.502-.915-.707-1.431-.707ZM8.941 4h2.309a1.25 1.25 0 0 0 0-2.5c-.516 0-1 .205-1.43.707-.337.392-.646.975-.879 1.793Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Marketplace
</span>      
</a>
  
</li>

</ul>  </nav-list>
</nav>

        <div data-view-component="true" class="my-3 d-flex flex-justify-center height-full">
          <span data-view-component="true">
  <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="anim-rotate">
    <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none"></circle>
    <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>    <span class="sr-only">Loading</span>
</span>
</div>
</div>
      <div data-view-component="true" class="flex-1"></div>


      <div data-view-component="true" class="px-2">      <p class="color-fg-subtle text-small text-light">© 2025 GitHub, Inc.</p>

      <div data-view-component="true" class="d-flex flex-wrap text-small text-light">
          <a target="_blank" href="https://github.com/about" data-view-component="true" class="Link mr-2">About</a>
          <a target="_blank" href="https://github.blog/" data-view-component="true" class="Link mr-2">Blog</a>
          <a target="_blank" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link mr-2">Terms</a>
          <a target="_blank" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link mr-2">Privacy</a>
          <a target="_blank" href="https://github.com/security" data-view-component="true" class="Link mr-2">Security</a>
          <a target="_blank" href="https://www.githubstatus.com/" data-view-component="true" class="Link mr-3">Status</a>

</div></div>
</div>
      </scrollable-region>
      
</dialog></dialog-helper>

  </include-fragment>
</deferred-side-panel>

        <a class="AppHeader-logo ml-1" href="https://github.com/" data-hotkey="g d" aria-label="Homepage " data-turbo="false" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;}">
          <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
</svg>
        </a>

          <div class="AppHeader-context">
  <div class="AppHeader-context-compact">
      <button aria-expanded="false" aria-haspopup="dialog" aria-label="Page context: Ahmad528 / shoppingsite" id="dialog-show-context-region-dialog" data-show-dialog-id="context-region-dialog" type="button" data-view-component="true" class="AppHeader-context-compact-trigger Truncate Button--secondary Button--medium Button box-shadow-none">  <span class="Button-content">
    <span class="Button-label"><span class="AppHeader-context-compact-lead">
                <span class="AppHeader-context-compact-parentItem">Ahmad528</span>
                <span class="no-wrap">&nbsp;/</span>

            </span>

            <strong class="AppHeader-context-compact-mainItem d-flex flex-items-center Truncate">
  <span class="Truncate-text ">shoppingsite</span>

</strong></span>
  </span>
</button>

<dialog-helper>
  <dialog id="context-region-dialog" aria-modal="true" aria-labelledby="context-region-dialog-title" aria-describedby="context-region-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade Overlay--disableScroll">
    <div data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="context-region-dialog-title">
        Navigate back to
      </h1>
        
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="context-region-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="context-region-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">          <ul role="list" class="list-style-none">
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;Ahmad528&quot;,&quot;screen_size&quot;:&quot;compact&quot;}" href="https://github.com/Ahmad528" data-view-component="true" class="Link--primary Truncate d-flex flex-items-center py-1">
        <span class="AppHeader-context-item-label Truncate-text ">
            <svg aria-hidden="true" height="12" viewBox="0 0 16 16" version="1.1" width="12" data-view-component="true" class="octicon octicon-person mr-1">
    <path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
</svg>

          Ahmad528
        </span>

</a>
    </li>
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;shoppingsite&quot;,&quot;screen_size&quot;:&quot;compact&quot;}" href="https://github.com/Ahmad528/shoppingsite" data-view-component="true" class="Link--primary Truncate d-flex flex-items-center py-1">
        <span class="AppHeader-context-item-label Truncate-text ">
            <svg aria-hidden="true" height="12" viewBox="0 0 16 16" version="1.1" width="12" data-view-component="true" class="octicon octicon-repo mr-1">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

          shoppingsite
        </span>

</a>
    </li>
</ul>

</div>
      </scrollable-region>
      
</dialog></dialog-helper>
  </div>

  <div class="AppHeader-context-full">
    <nav role="navigation" aria-label="Page context">
      <ul role="list" class="list-style-none">
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;Ahmad528&quot;,&quot;screen_size&quot;:&quot;full&quot;}" data-hovercard-type="user" data-hovercard-url="/users/Ahmad528/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Ahmad528" data-view-component="true" class="AppHeader-context-item">
        <span class="AppHeader-context-item-label  ">

          Ahmad528
        </span>

</a>
        <span class="AppHeader-context-item-separator">
          <span class="sr-only">/</span>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M10.956 1.27994L6.06418 14.7201L5 14.7201L9.89181 1.27994L10.956 1.27994Z" fill="currentcolor"></path>
          </svg>
        </span>
    </li>
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;shoppingsite&quot;,&quot;screen_size&quot;:&quot;full&quot;}" href="https://github.com/Ahmad528/shoppingsite" data-view-component="true" class="AppHeader-context-item">
        <span class="AppHeader-context-item-label  ">

          shoppingsite
        </span>

</a>
    </li>
</ul>

    </nav>
  </div>
</div>

      </div>
      <div class="AppHeader-globalBar-end">
          <div class="AppHeader-search">
              


<qbsearch-input class="search-input" data-scope="repo:Ahmad528/shoppingsite" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="wrce2vnnJ4bDeZHstnctaLKeYxwUveqZEpy3Y96xgYRzgMY1YUW5-0nkie_zCBAALRq5F5T84c8Mu4uVYjd6cA" data-max-custom-scopes="10" data-header-redesign-enabled="true" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="Ahmad528/shoppingsite" data-current-org="" data-current-owner="Ahmad528" data-logged-in="true" data-copilot-chat-enabled="false" data-nl-search-enabled="false" data-catalyst="">
  <div class="search-input-container search-with-dialog position-relative d-flex flex-row flex-items-center height-auto color-bg-transparent border-0 color-fg-subtle mx-0" data-action="click:qbsearch-input#searchInputContainerClicked">
      
            <button type="button" data-action="click:qbsearch-input#handleExpand" class="AppHeader-button AppHeader-search-whenNarrow" aria-label="Search or jump to…" aria-expanded="false" aria-haspopup="dialog">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </button>


<div class="AppHeader-search-whenRegular">
  <div class="AppHeader-search-wrap AppHeader-search-wrap--hasTrailing">
    <div class="AppHeader-search-control AppHeader-search-control-overflow">
      <label for="AppHeader-searchInput" aria-label="Search or jump to…" class="AppHeader-search-visual--leading">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
      </label>

                <button type="button" data-target="qbsearch-input.inputButton" data-action="click:qbsearch-input#handleExpand" class="AppHeader-searchButton form-control input-contrast text-left color-fg-subtle no-wrap placeholder" data-hotkey="s,/" data-analytics-event="{&quot;location&quot;:&quot;navbar&quot;,&quot;action&quot;:&quot;searchbar&quot;,&quot;context&quot;:&quot;global&quot;,&quot;tag&quot;:&quot;input&quot;,&quot;label&quot;:&quot;searchbar_input_global_navbar&quot;}" aria-describedby="search-error-message-flash">
            <div class="overflow-hidden">
              <span id="qb-input-query" data-target="qbsearch-input.inputButtonText">
                  Type <kbd class="AppHeader-search-kbd">/</kbd> to search
              </span>
            </div>
          </button>

    </div>


  </div>
</div>

    <input type="hidden" name="type" class="js-site-search-type-field">

    
<div class="Overlay--hidden " data-modal-dialog-overlay="">
  <modal-dialog data-action="close:qbsearch-input#handleClose cancel:qbsearch-input#handleClose" data-target="qbsearch-input.searchSuggestionsDialog" role="dialog" id="search-suggestions-dialog" aria-modal="true" aria-labelledby="search-suggestions-dialog-header" data-view-component="true" class="Overlay Overlay--width-medium Overlay--height-auto">
      <h1 id="search-suggestions-dialog-header" class="sr-only">Search code, repositories, users, issues, pull requests...</h1>
    <div class="Overlay-body Overlay-body--paddingNone">
      
          <div data-view-component="true">        <div class="search-suggestions position-absolute width-full color-shadow-large border color-fg-default color-bg-default overflow-hidden d-flex flex-column query-builder-container" style="border-radius: 12px;" data-target="qbsearch-input.queryBuilderContainer" hidden="">
          <!-- '"` --><!-- </textarea></xmp> --><form id="query-builder-test-form" action="https://github.com/Ahmad528/shoppingsite/blob/main/fooditem.js" accept-charset="UTF-8" method="get">
  <query-builder data-target="qbsearch-input.queryBuilder" id="query-builder-query-builder-test" data-filter-key=":" data-view-component="true" class="QueryBuilder search-query-builder" data-min-width="300" data-catalyst="">
    <div class="FormControl FormControl--fullWidth">
      <label id="query-builder-test-label" for="query-builder-test" class="FormControl-label sr-only">
        Search
      </label>
      <div class="QueryBuilder-StyledInput width-fit " data-target="query-builder.styledInput">
          <span id="query-builder-test-leadingvisual-wrap" class="FormControl-input-leadingVisualWrap QueryBuilder-leadingVisualWrap">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search FormControl-input-leadingVisual">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </span>
        <div data-target="query-builder.styledInputContainer" class="QueryBuilder-StyledInputContainer">
          <div aria-hidden="true" class="QueryBuilder-StyledInputContent" data-target="query-builder.styledInputContent"></div>
          <div class="QueryBuilder-InputWrapper">
            <div aria-hidden="true" class="QueryBuilder-Sizer" data-target="query-builder.sizer"><span></span></div>
            <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-73e6474c-ea30-458d-8a56-b6a9679ab06b" data-target="query-builder.input" data-action="
          input:query-builder#inputChange
          blur:query-builder#inputBlur
          keydown:query-builder#inputKeydown
          focus:query-builder#inputFocus
        " data-view-component="true" class="FormControl-input QueryBuilder-Input FormControl-medium" aria-controls="query-builder-test-results" aria-autocomplete="list" aria-haspopup="listbox" style="width: 300px;">
          </div>
        </div>
          <span class="sr-only" id="query-builder-test-clear">Clear</span>
          <button role="button" id="query-builder-test-clear-button" aria-labelledby="query-builder-test-clear query-builder-test-label" data-target="query-builder.clearButton" data-action="
                click:query-builder#clear
                focus:query-builder#clearButtonFocus
                blur:query-builder#clearButtonBlur
              " variant="small" hidden="" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium mr-1 px-2 py-0 d-flex flex-items-center rounded-1 color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x-circle-fill Button-visual">
    <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
</svg>
</button>

      </div>
      <template id="search-icon"></template>

<template id="code-icon"></template>

<template id="file-code-icon"></template>

<template id="history-icon"></template>

<template id="repo-icon"></template>

<template id="bookmark-icon"></template>

<template id="plus-circle-icon"></template>

<template id="circle-icon"></template>

<template id="trash-icon"></template>

<template id="team-icon"></template>

<template id="project-icon"></template>

<template id="pencil-icon"></template>

<template id="copilot-icon"></template>

<template id="copilot-error-icon"></template>

<template id="workflow-icon"></template>

<template id="book-icon"></template>

<template id="code-review-icon"></template>

<template id="codespaces-icon"></template>

<template id="comment-icon"></template>

<template id="comment-discussion-icon"></template>

<template id="organization-icon"></template>

<template id="rocket-icon"></template>

<template id="shield-check-icon"></template>

<template id="heart-icon"></template>

<template id="server-icon"></template>

<template id="globe-icon"></template>

<template id="issue-opened-icon"></template>

<template id="device-mobile-icon"></template>

<template id="package-icon"></template>

<template id="credit-card-icon"></template>

<template id="play-icon"></template>

<template id="gift-icon"></template>

<template id="code-square-icon"></template>

<template id="device-desktop-icon"></template>

        <div class="position-relative">
                <ul role="listbox" class="ActionListWrap QueryBuilder-ListWrap" aria-label="Suggestions" data-action="
                    combobox-commit:query-builder#comboboxCommit
                    mousedown:query-builder#resultsMousedown
                  " data-target="query-builder.resultsList" data-persist-list="false" id="query-builder-test-results"></ul>
        </div>
      <div class="FormControl-inlineValidation" id="validation-73e6474c-ea30-458d-8a56-b6a9679ab06b" hidden="hidden">
        <span class="FormControl-inlineValidation--visual">
          <svg aria-hidden="true" height="12" viewBox="0 0 12 12" version="1.1" width="12" data-view-component="true" class="octicon octicon-alert-fill">
    <path d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
</svg>
        </span>
        <span></span>
</div>    </div>
    <div data-target="query-builder.screenReaderFeedback" aria-live="polite" aria-atomic="true" class="sr-only">0 suggestions.</div>
</query-builder></form>
          <div class="d-flex flex-row color-fg-muted px-3 text-small color-bg-default search-feedback-prompt">
            <a target="_blank" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax" data-view-component="true" class="Link color-fg-accent text-normal ml-2">Search syntax tips</a>            <div class="d-flex flex-1"></div>
              <button data-action="click:qbsearch-input#showFeedbackDialog" type="button" data-view-component="true" class="Button--link Button--medium Button color-fg-accent text-normal ml-2">  <span class="Button-content">
    <span class="Button-label">Give feedback</span>
  </span>
</button>
          </div>
        </div>
</div>

    </div>
</modal-dialog></div>
  </div>
  <div data-action="click:qbsearch-input#retract" class="dark-backdrop position-fixed" hidden="" data-target="qbsearch-input.darkBackdrop"></div>
  <div class="color-fg-default">
    
<dialog-helper>
  <dialog data-target="qbsearch-input.feedbackDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="feedback-dialog" aria-modal="true" aria-labelledby="feedback-dialog-title" aria-describedby="feedback-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade Overlay--disableScroll">
    <div data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="feedback-dialog-title">
        Provide feedback
      </h1>
        
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="feedback-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="feedback-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">        <!-- '"` --><!-- </textarea></xmp> --><form id="code-search-feedback-form" data-turbo="false" action="https://github.com/search/feedback" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="fsULVn_IxtNtg744X-qvLl3OO6OQ5yF_LlePWeJgALynGhEw4MbhLJUDGYyZQI6n5a5sHrqYuPsSKqGdJEd6EQ">
          <p>We read every piece of feedback, and take your input very seriously.</p>
          <textarea name="feedback" class="form-control width-full mb-2" style="height: 120px" id="feedback"></textarea>
          <input name="include_email" id="include_email" aria-label="Include my email address so I can be contacted" class="form-control mr-2" type="checkbox">
          <label for="include_email" style="font-weight: normal">Include my email address so I can be contacted</label>
</form></div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd">          <button data-close-dialog-id="feedback-dialog" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="code-search-feedback-form" data-action="click:qbsearch-input#submitFeedback" type="submit" data-view-component="true" class="btn-primary btn">    Submit feedback
</button>
</div>
</dialog></dialog-helper>

    <custom-scopes data-target="qbsearch-input.customScopesManager" data-catalyst="">
    
<dialog-helper>
  <dialog data-target="custom-scopes.customScopesModalDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="custom-scopes-dialog" aria-modal="true" aria-labelledby="custom-scopes-dialog-title" aria-describedby="custom-scopes-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade Overlay--disableScroll">
    <div data-view-component="true" class="Overlay-header Overlay-header--divided">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="custom-scopes-dialog-title">
        Saved searches
      </h1>
        <h2 id="custom-scopes-dialog-description" class="Overlay-description">Use saved searches to filter your results more quickly</h2>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="custom-scopes-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="custom-scopes-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">        <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

        <div hidden="" class="create-custom-scope-form" data-target="custom-scopes.createCustomScopeForm">
        <!-- '"` --><!-- </textarea></xmp> --><form id="custom-scopes-dialog-form" data-turbo="false" action="https://github.com/search/custom_scopes" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="EvpqPzXgvuirdJYVNyZEgIFYpSb5okHcRWXtOLPbMyU1msjCBq5MW_TQIfwJNvJN1994eD1HLU_eOCqtdwrKaw">
          <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

          <input type="hidden" id="custom_scope_id" name="custom_scope_id" data-target="custom-scopes.customScopesIdField">

          <div class="form-group">
            <label for="custom_scope_name">Name</label>
            <auto-check src="/search/custom_scopes/check_name" required="" only-validate-on-blur="false">
              <input type="text" name="custom_scope_name" id="custom_scope_name" data-target="custom-scopes.customScopesNameField" class="form-control" autocomplete="off" placeholder="github-ruby" required="" maxlength="50" spellcheck="false">
              <input type="hidden" value="V7mDoPj8FBg6XWL2Y3e4eB-aFbwBBqtx7T9Q-aEyGko7sdyvZ_4zhSl-zVPMiik6yOTDrSakI9bcIT1C_EZr3A" data-csrf="true">
            </auto-check>
          </div>

          <div class="form-group">
            <label for="custom_scope_query">Query</label>
            <input type="text" name="custom_scope_query" id="custom_scope_query" data-target="custom-scopes.customScopesQueryField" class="form-control" autocomplete="off" placeholder="(repo:mona/a OR repo:mona/b) AND lang:python" required="" maxlength="500">
          </div>

          <p class="text-small color-fg-muted">
            To see all available qualifiers, see our <a class="Link--inTextBlock" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax">documentation</a>.
          </p>
</form>        </div>

        <div data-target="custom-scopes.manageCustomScopesForm">
          <div data-target="custom-scopes.list"></div>
        </div>

</div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd Overlay-footer--divided">          <button data-action="click:custom-scopes#customScopesCancel" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="custom-scopes-dialog-form" data-action="click:custom-scopes#customScopesSubmit" data-target="custom-scopes.customScopesSubmitButton" type="submit" data-view-component="true" class="btn-primary btn">    Create saved search
</button>
</div>
</dialog></dialog-helper>
    </custom-scopes>
  </div>
</qbsearch-input>  <input type="hidden" value="f2j0LjLheFgbhr0dgUvCwLih9WGKDrAOi414mW8lB1Yz0twm3dPTWqIucsQWcLuFDNg-iE5jVvzZLVMZnRPaRA" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf">


          </div>

        
          <div class="AppHeader-CopilotChat">
    <react-partial-anchor data-catalyst="">
      <button id="copilot-chat-header-button" data-target="react-partial-anchor.anchor" data-hotkey="Shift+C" aria-expanded="false" aria-controls="copilot-chat-panel" aria-labelledby="tooltip-4a866ba8-bae4-424b-b852-426ba1e09eb0" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button AppHeader-buttonLeft">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copilot Button-visual">
    <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
</svg>
</button><tool-tip id="tooltip-4a866ba8-bae4-424b-b852-426ba1e09eb0" for="copilot-chat-header-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Chat with Copilot</tool-tip>

      
    
        <script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_react-relay_index_js-f9c38be24130.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_tanstack_query-core_build_modern_queryObserver_js-node_modules_tanstack_-defd52-843b41414e0e.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_remark-gfm_lib_index_js-node_modules_remark-parse_lib_index_js-node_modu-44d0fc-295763c7af92.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_highlight_js_lib_index_js-node_modules_tanstack_react-query_build_modern-d366b9-fe40578a034d.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_accname_dist_access-b37425-35bd8d94d981.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_combobox-nav_dist_index_js-node_modules_github_hotkey_dist_index_-2c4211-930065e580ce.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_item-picker_constants_labels_ts-ui_packages_item-picker_constants_values_ts-ui_pa-163a9a-01c58f145d36.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_item-picker_components_RepositoryPicker_tsx-e11cf652a83c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_copy-to-clipboard_CopyToClipboardButton_tsx-ui_packages_inline-autocomplete_Inlin-0940d3-5b7be78d6823.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_copilot-chat_utils_copilot-chat-helpers_ts-df714572f80e.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_copilot-chat_utils_copilot-chat-hooks_ts-ui_packages_issue-viewer_utils_queries_ts-2b67dc316f63.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_test-id-props_test-id-props_ts-ui_packages_copilot-markdown_MarkdownRenderer_tsx--f736ee-1977572d095e.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/copilot-chat-80fb11e426e3.js.download"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/primer-react.077d61b47e93f8c5e577.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/copilot-chat.e7e2b48ab5b13baddbf6.module.css">
        <link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/copilot-markdown-rendering-f6845e8f5d6b.css">
        <script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/primer-react-8ce8f9e2d741.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/react-core-3c3b41159c53.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/react-lib-f09868a8643f.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/octicons-react-611691cca2f6.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-62da9f-2df2f32ec596.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-e7dcdd-f7cc96ebae76.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js-55fea94174bf.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_dompurify_dist_purify_js-b89b98661809.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_react-relay_index_js-f9c38be24130.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_tanstack_query-core_build_modern_queryObserver_js-node_modules_tanstack_-defd52-843b41414e0e.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_remark-gfm_lib_index_js-node_modules_remark-parse_lib_index_js-node_modu-44d0fc-295763c7af92.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_highlight_js_lib_index_js-node_modules_tanstack_react-query_build_modern-d366b9-fe40578a034d.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_accname_dist_access-b37425-35bd8d94d981.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/vendors-node_modules_github_combobox-nav_dist_index_js-node_modules_github_hotkey_dist_index_-2c4211-930065e580ce.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_paths_index_ts-4558f7eebed5.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_ui-commands_ui-commands_ts-ac3420ecd15f.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_item-picker_constants_labels_ts-ui_packages_item-picker_constants_values_ts-ui_pa-163a9a-01c58f145d36.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_item-picker_components_RepositoryPicker_tsx-e11cf652a83c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_copy-to-clipboard_CopyToClipboardButton_tsx-ui_packages_inline-autocomplete_Inlin-0940d3-5b7be78d6823.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_copilot-chat_utils_copilot-chat-helpers_ts-df714572f80e.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_copilot-chat_utils_copilot-chat-hooks_ts-ui_packages_issue-viewer_utils_queries_ts-2b67dc316f63.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_test-id-props_test-id-props_ts-ui_packages_copilot-markdown_MarkdownRenderer_tsx--f736ee-1977572d095e.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/copilot-chat-80fb11e426e3.js.download"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/primer-react.077d61b47e93f8c5e577.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/copilot-chat.e7e2b48ab5b13baddbf6.module.css">

<react-partial partial-name="copilot-chat" data-ssr="false" data-attempted-ssr="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"currentTopic":{"id":416351968,"name":"shoppingsite","ownerLogin":"Ahmad528","ownerType":"User","readmePath":"README.md","description":"Food delivery website design","commitOID":"9ee36ca8ae57771555b23af93b7aed16873611cf","ref":"refs/heads/main","refInfo":{"name":"main","type":"branch"},"visibility":"public","languages":[{"name":"JavaScript","percent":60.0},{"name":"CSS","percent":25.8},{"name":"HTML","percent":14.2}],"customInstructions":null},"findFileWorkerPath":"/assets-cdn/worker/find-file-worker-2e45fb5767a8.js","renderPopover":false,"renderBetaLabel":false,"chatIsVisible":true,"chatVisibleSettingPath":"/users/AnanyaBansal28/copilot_chat/settings/copilot_chat_visibility","ssoOrganizations":[],"agentsPath":"/github-copilot/chat/agents","apiURL":"https://api.individual.githubcopilot.com","currentUserLogin":"AnanyaBansal28","customInstructions":null,"renderKnowledgeBases":false,"optedInToPreviewFeatures":false,"optedInToUserFeedback":false,"renderAttachKnowledgeBaseHerePopover":true,"renderKnowledgeBaseAttachedToChatPopover":true,"personalInstructions":null,"reviewLab":false,"realIp":null,"scrollToTop":false,"hasCEorCBAccess":false,"licenseType":"unlicensed","quotas":null,"icebreakers":[{"type":"functional","data":[{"id":"open-issues-in-react","message":"Get a list of the latest open issues in the facebook/react repository, including all their labels.","titleHtml":"Open issues in \u003cspan class=\"fgColor-muted\"\u003efacebook/react\u003c/span\u003e","icon":"issue-opened","color":"var(--display-green-fgColor)"},{"id":"pulls-in-vscode","message":"Retrieve pull requests in microsoft/vscode.","titleHtml":"Pull requests in \u003cspan class=\"fgColor-muted\"\u003emicrosoft/vscode\u003c/span\u003e","icon":"git-pull-request","color":"var(--display-green-fgColor)"},{"id":"commits-in-linux","message":"Show recent commits in torvalds/linux.","titleHtml":"Recent commits in \u003cspan class=\"fgColor-muted\"\u003etorvalds/linux\u003c/span\u003e","icon":"git-commit","color":"var(--display-blue-fgColor)"},{"id":"my-latest-issues","message":"Find the five latest issues assigned to me.","titleHtml":"Find issues assigned to me","icon":"issue-opened","color":"var(--display-green-fgColor)"},{"id":"explain-hash-table","message":"Explain what a hash table is in JavaScript.","titleHtml":"What is a hash table in JS?","icon":"question","color":"var(--display-teal-fgColor)"},{"id":"latest-node-release","message":"Fetch the latest release of nodejs/node and highlight the changes.","titleHtml":"Latest \u003cspan class=\"fgColor-muted\"\u003enodejs/node\u003c/span\u003e release","icon":"tag","color":"var(--display-purple-fgColor)"},{"id":"create-profile-readme","message":"Create a profile README for $$USERNAME$$.","titleHtml":"Create a profile README for me","icon":"rocket","color":"var(--display-pink-fgColor)"},{"id":"bugs-in-primer","message":"Show recent bugs in primer/react.","titleHtml":"Recent bugs in \u003cspan class=\"fgColor-muted\"\u003eprimer/react\u003c/span\u003e","icon":"bug","color":"var(--display-red-fgColor)"},{"id":"my-open-pulls","message":"Find my open pull requests.","titleHtml":"My open pull requests","icon":"git-pull-request","color":"var(--display-green-fgColor)"},{"id":"generate-html-calculator","message":"Generate a simple calculator using HTML, CSS, and JavaScript.","titleHtml":"Generate an HTML/JS calculator","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"python-strong-password-endpoint","message":"Generate a Python endpoint for signing up that only allows strong passwords.","titleHtml":"Python password endpoint","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"rails-auth-endpoint","message":"Generate a Rails endpoint for authenticating with email and password.","titleHtml":"Rails authentication endpoint","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"react-email-validation-regex","message":"Write a regex in JavaScript that validates email addresses.","titleHtml":"Email validation regex in JS","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"explain-python-decorators","message":"Explain how decorators work in Python with examples.","titleHtml":"What are Python decorators?","icon":"question","color":"var(--display-teal-fgColor)"},{"id":"python-pandas-data-analysis","message":"Write a Python script that analyzes a dataset using Pandas.","titleHtml":"Python Panda data analysis","icon":"code","color":"var(--display-gray-fgColor)"}]},{"type":"instructional","data":[{"id":"github-problem-solving","message":"Based on your available skills, explain what you can do","titleHtml":"How can you help?","icon":"light-bulb","color":"var(--display-purple-fgColor)"},{"id":"what-can-i-do-with-github-copilot-chat","message":"What can I do with GitHub Copilot Chat?","titleHtml":"What can I do here?","icon":"light-bulb","color":"var(--display-purple-fgColor)"}]},{"type":"interactional","data":[{"id":"to-do-app-local-strage","message":"Create a to-do list application with local storage functionality.","titleHtml":"To-do list with local storage","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"digital-clock-time-zones","message":"Create a digital clock that displays the current time in different time zones.","titleHtml":"A digital time zone clock","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"weather-dashboard-app","message":"Develop a weather dashboard that fetches data from a public weather API.","titleHtml":"Develop a weather dashboard","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"create-joke-generator","message":"Create a random joke generator using an external API.","titleHtml":"Create a joke generator","icon":"code","color":"var(--display-gray-fgColor)"}]}]}}</script>
  <div data-target="react-partial.reactRoot"><div class="Box-sc-g0xbh4-0 bpDFns"></div><div class="Box-sc-g0xbh4-0 hmHhrt"></div><script type="application/json" id="__PRIMER_DATA_:r1r:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>


      </react-partial-anchor>
    <react-partial-anchor data-catalyst="">
      <button id="global-copilot-menu-button" data-target="react-partial-anchor.anchor" aria-expanded="false" aria-labelledby="tooltip-d9c38cb4-702b-49a5-a045-256a776ee1c2" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button AppHeader-buttonRight" aria-haspopup="true">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down Button-visual">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button><tool-tip id="tooltip-d9c38cb4-702b-49a5-a045-256a776ee1c2" for="global-copilot-menu-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Open Copilot…</tool-tip>

      
    
        <script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/global-copilot-menu-55bcf6c75b08.js.download"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/primer-react.077d61b47e93f8c5e577.module.css">

<react-partial partial-name="global-copilot-menu" data-ssr="false" data-attempted-ssr="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{}}</script>
  <div data-target="react-partial.reactRoot"><script type="application/json" id="__PRIMER_DATA_:rv:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>

      </react-partial-anchor>
</div>


        <div class="AppHeader-actions position-relative">
             <react-partial-anchor data-catalyst="">
      <button id="global-create-menu-anchor" aria-label="Create something new" data-target="react-partial-anchor.anchor" type="button" data-view-component="true" class="AppHeader-button global-create-button Button--secondary Button--medium Button width-auto color-fg-muted" aria-describedby="tooltip-17909a9f-b06a-4b39-bdb6-da4b240bf776" aria-expanded="false" aria-haspopup="true">  <span class="Button-content">
      <span class="Button-visual Button-leadingVisual">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-plus">
    <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
</svg>
      </span>
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg></span>
  </span>
</button><tool-tip id="tooltip-17909a9f-b06a-4b39-bdb6-da4b240bf776" for="global-create-menu-anchor" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Create new...</tool-tip>

      
    
        <script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/ui_packages_promise-with-resolvers-polyfill_promise-with-resolvers-polyfill_ts-ui_packages_re-8d43b0-ba78ca22ad20.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/global-create-menu-ff847de8f437.js.download"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/primer-react.077d61b47e93f8c5e577.module.css">

<react-partial partial-name="global-create-menu" data-ssr="false" data-attempted-ssr="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"createRepo":true,"importRepo":true,"codespaces":true,"gist":true,"createOrg":true,"createProject":false,"createProjectUrl":"/AnanyaBansal28?tab=projects","createLegacyProject":false,"createIssue":false,"org":null,"owner":"Ahmad528","repo":"shoppingsite"}}</script>
  <div data-target="react-partial.reactRoot"><script type="application/json" id="__PRIMER_DATA_:r12:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>

      </react-partial-anchor>


          <a href="https://github.com/issues" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-ad052a88-7b71-4bbc-b5a2-a84508581b15" aria-labelledby="tooltip-6e9225b0-6427-4b99-9a73-b3c474495604" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened Button-visual">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
</a><tool-tip id="tooltip-6e9225b0-6427-4b99-9a73-b3c474495604" for="icon-button-ad052a88-7b71-4bbc-b5a2-a84508581b15" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Issues</tool-tip>

          <a href="https://github.com/pulls" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-13c8c068-15b5-49d0-81ba-c7b2ea8357ec" aria-labelledby="tooltip-83602031-dc89-4efd-a1ab-20cc16e2c6ca" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request Button-visual">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
</a><tool-tip id="tooltip-83602031-dc89-4efd-a1ab-20cc16e2c6ca" for="icon-button-13c8c068-15b5-49d0-81ba-c7b2ea8357ec" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Pull requests</tool-tip>

        </div>

        <notification-indicator data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTk1Mjg0MzE1IiwidCI6MTczODkyMDA2NX0=--290777a6e7ca84e4a4928348450ebd2a5e2e732fe268a42f66eb07ea4bd8780f" data-indicator-mode="global" data-tooltip-global="You have unread notifications" data-tooltip-unavailable="Notifications are unavailable at the moment." data-tooltip-none="You have no unread notifications" data-header-redesign-enabled="true" data-fetch-indicator-src="/notifications/indicator" data-fetch-indicator-enabled="true" data-view-component="true" class="js-socket-channel" data-fetch-retry-delay-time="500" data-catalyst="">
    <a id="AppHeader-notifications-button" href="https://github.com/notifications" aria-labelledby="notification-indicator-tooltip" data-hotkey="g n" data-target="notification-indicator.link" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;NOTIFICATIONS_HEADER&quot;,&quot;label&quot;:&quot;icon:unread&quot;}" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted AppHeader-button--hasIndicator">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-inbox Button-visual">
    <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
</svg>
</a>

    <tool-tip id="notification-indicator-tooltip" data-target="notification-indicator.tooltip" for="AppHeader-notifications-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>You have unread notifications</tool-tip>
</notification-indicator>

        <div class="AppHeader-user">
          <deferred-side-panel data-url="/_side-panels/user?repository_id=416351968" data-catalyst="">
  <include-fragment data-target="deferred-side-panel.fragment"><template shadowrootmode="open"><style>:host {display: block;}</style><slot></slot></template>
    <react-partial-anchor data-catalyst="">
  <button data-target="react-partial-anchor.anchor" data-login="AnanyaBansal28" aria-label="Open user navigation menu" type="button" data-view-component="true" class="Button--invisible Button--medium Button Button--invisible-noVisuals color-bg-transparent p-0" aria-expanded="false" aria-haspopup="true">  <span class="Button-content">
    <span class="Button-label"><img src="./fooditem_files/195284315" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle"></span>
  </span>
</button>
  

    <script crossorigin="anonymous" defer="defer" type="application/javascript" src="./fooditem_files/global-user-nav-drawer-e05ea5201a40.js.download"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/primer-react.077d61b47e93f8c5e577.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./fooditem_files/global-user-nav-drawer.830d6c10c9fea7fc134e.module.css">

<react-partial partial-name="global-user-nav-drawer" data-ssr="false" data-attempted-ssr="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"owner":{"login":"AnanyaBansal28","name":null,"avatarUrl":"https://avatars.githubusercontent.com/u/195284315?v=4"},"drawerId":"global-user-nav-drawer","lazyLoadItemDataFetchUrl":"/_side-panels/user.json","canAddAccount":true,"addAccountPath":"/login?add_account=1\u0026return_to=https%3A%2F%2Fgithub.com%2FAhmad528%2Fshoppingsite%2Fblob%2Fmain%2FERdiagram.jpg","switchAccountPath":"/switch_account","loginAccountPath":"/login?add_account=1","projectsPath":"/AnanyaBansal28?tab=projects","gistsUrl":"https://gist.github.com/mine","docsUrl":"https://docs.github.com","yourEnterpriseUrl":null,"enterpriseSettingsUrl":null,"supportUrl":"https://support.github.com","showAccountSwitcher":true,"showCopilot":true,"showEnterprises":true,"showEnterprise":false,"showGists":true,"showOrganizations":true,"showSponsors":true,"showUpgrade":true,"showFeaturesPreviews":true,"showEnterpriseSettings":false,"createMenuProps":{"createRepo":true,"importRepo":true,"codespaces":true,"gist":true,"createOrg":true,"createProject":false,"createProjectUrl":"/AnanyaBansal28?tab=projects","createLegacyProject":false,"createIssue":false,"org":null,"owner":"Ahmad528","repo":"shoppingsite"}}}</script>
  <div data-target="react-partial.reactRoot"><script type="application/json" id="__PRIMER_DATA_:r15:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>

  </react-partial-anchor>

  </include-fragment>
</deferred-side-panel>
        </div>

        <div class="position-absolute mt-2">
            
<site-header-logged-in-user-menu data-catalyst="">

</site-header-logged-in-user-menu>

        </div>
      </div>
    </div>


    
        <div class="AppHeader-localBar">
          <nav data-pjax="#js-repo-pjax-container" aria-label="Repository" data-view-component="true" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav">

  <ul data-view-component="true" class="UnderlineNav-body list-style-none">
      <li data-view-component="true" class="d-inline-flex">
  <a id="code-tab" href="https://github.com/Ahmad528/shoppingsite" data-tab-item="i0code-tab" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments repo_attestations /Ahmad528/shoppingsite" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g c" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Code&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item selected" aria-current="page">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        <span data-content="Code">Code</span>
          <span id="code-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="issues-tab" href="https://github.com/Ahmad528/shoppingsite/issues" data-tab-item="i1issues-tab" data-selected-links="repo_issues repo_labels repo_milestones /Ahmad528/shoppingsite/issues" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Issues&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        <span data-content="Issues">Issues</span>
          <span id="issues-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="pull-requests-tab" href="https://github.com/Ahmad528/shoppingsite/pulls" data-tab-item="i2pull-requests-tab" data-selected-links="repo_pulls checks /Ahmad528/shoppingsite/pulls" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Pull requests&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        <span data-content="Pull requests">Pull requests</span>
          <span id="pull-requests-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="2" data-view-component="true" class="Counter">2</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="actions-tab" href="https://github.com/Ahmad528/shoppingsite/actions" data-tab-item="i3actions-tab" data-selected-links="repo_actions /Ahmad528/shoppingsite/actions" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g a" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Actions&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        <span data-content="Actions">Actions</span>
          <span id="actions-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="projects-tab" href="https://github.com/Ahmad528/shoppingsite/projects" data-tab-item="i4projects-tab" data-selected-links="repo_projects new_repo_project repo_project /Ahmad528/shoppingsite/projects" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g b" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Projects&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        <span data-content="Projects">Projects</span>
          <span id="projects-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="security-tab" href="https://github.com/Ahmad528/shoppingsite/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /Ahmad528/shoppingsite/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span data-content="Security">Security</span>
          

    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="insights-tab" href="https://github.com/Ahmad528/shoppingsite/pulse" data-tab-item="i6insights-tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /Ahmad528/shoppingsite/pulse" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Insights&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        <span data-content="Insights">Insights</span>
          <span id="insights-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
</ul>
    <div style="visibility:hidden;" data-view-component="true" class="UnderlineNav-actions js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0">      <action-menu data-select-variant="none" data-view-component="true" data-catalyst="">
  <focus-group direction="vertical" mnemonics="" retain="">
    <button id="action-menu-6f6b536d-7232-43b8-962c-e6abb6ccd257-button" popovertarget="action-menu-6f6b536d-7232-43b8-962c-e6abb6ccd257-overlay" aria-controls="action-menu-6f6b536d-7232-43b8-962c-e6abb6ccd257-list" aria-haspopup="true" aria-labelledby="tooltip-0925c34c-13e4-48e0-ab11-1240630fdad1" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium UnderlineNav-item">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal Button-visual">
    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
</svg>
</button><tool-tip id="tooltip-0925c34c-13e4-48e0-ab11-1240630fdad1" for="action-menu-6f6b536d-7232-43b8-962c-e6abb6ccd257-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Additional navigation options</tool-tip>


<anchored-position data-target="action-menu.overlay" id="action-menu-6f6b536d-7232-43b8-962c-e6abb6ccd257-overlay" anchor="action-menu-6f6b536d-7232-43b8-962c-e6abb6ccd257-button" align="start" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true" style="inset: 36px auto auto 0px;">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      <div data-view-component="true" class="Overlay-body Overlay-body--paddingNone">          <action-list data-catalyst="">
  <div data-view-component="true">
    <ul aria-labelledby="action-menu-6f6b536d-7232-43b8-962c-e6abb6ccd257-button" id="action-menu-6f6b536d-7232-43b8-962c-e6abb6ccd257-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
        <li hidden="" data-menu-item="i0code-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-36fba4ed-e03b-445d-9fc7-247e7f774ef2" href="https://github.com/Ahmad528/shoppingsite" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Code
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i1issues-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-b74a59ae-2b24-46d4-b32c-a2525ee60ccd" href="https://github.com/Ahmad528/shoppingsite/issues" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Issues
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i2pull-requests-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-32a485ec-f0b8-44a4-bf7b-d86f84e9c615" href="https://github.com/Ahmad528/shoppingsite/pulls" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Pull requests
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i3actions-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-754df1d2-a200-4c78-a872-f8baf2de7b51" href="https://github.com/Ahmad528/shoppingsite/actions" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Actions
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i4projects-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-a08e8f41-c211-407c-bb0c-9955627894d6" href="https://github.com/Ahmad528/shoppingsite/projects" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Projects
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i5security-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-3d465cab-f342-4a7b-b71f-52dca796efe8" href="https://github.com/Ahmad528/shoppingsite/security" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Security
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i6insights-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-d60d2954-1099-4580-a495-a817ae015c38" href="https://github.com/Ahmad528/shoppingsite/pulse" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Insights
</span>      
</a>
  
</li>
</ul>    
</div></action-list>


</div>
      
</div></anchored-position>  </focus-group>
</action-menu></div>
</nav>
        </div>
</header>


      <div hidden="hidden" data-view-component="true" class="js-stale-session-flash stale-session-flash flash flash-warn flash-full">
  
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span class="js-stale-session-flash-signed-in" hidden="">You signed in with another tab or window. <a class="Link--inTextBlock" href="https://github.com/Ahmad528/shoppingsite/blob/main/fooditem.js">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-signed-out" hidden="">You signed out in another tab or window. <a class="Link--inTextBlock" href="https://github.com/Ahmad528/shoppingsite/blob/main/fooditem.js">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-switched" hidden="">You switched accounts on another tab or window. <a class="Link--inTextBlock" href="https://github.com/Ahmad528/shoppingsite/blob/main/fooditem.js">Reload</a> to refresh your session.</span>

    <button id="icon-button-f3000154-7787-49b7-bb16-93ca53cbd987" aria-labelledby="tooltip-1da3f7f4-50db-4150-8dac-54e3628051d6" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium flash-close js-flash-close">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x Button-visual">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</button><tool-tip id="tooltip-1da3f7f4-50db-4150-8dac-54e3628051d6" for="icon-button-f3000154-7787-49b7-bb16-93ca53cbd987" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Dismiss alert</tool-tip>


  
</div>
          
    </div>

  <div id="start-of-content" class="show-on-focus"></div>








    <div id="js-flash-container" class="flash-container" data-turbo-replace="">




  <template class="js-flash-template"></template>
</div>


    
  <notification-shelf-watcher data-base-url="https://github.com/notifications/beta/shelf" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTk1Mjg0MzE1IiwidCI6MTczODkyMDA2NX0=--290777a6e7ca84e4a4928348450ebd2a5e2e732fe268a42f66eb07ea4bd8780f" data-view-component="true" class="js-socket-channel" data-refresh-delay="500" data-catalyst="" data-throttle-delay="5000"></notification-shelf-watcher>
  <div hidden="" data-initial="" data-target="notification-shelf-watcher.placeholder"></div>






  <div class="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled="" data-issue-and-pr-hovercards-enabled="" data-project-hovercards-enabled="">
        <div itemscope="" itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container">
      
      






    
  <div id="repository-container-header" data-turbo-replace="" hidden=""></div>




<turbo-frame id="repo-content-turbo-frame" target="_top" data-turbo-action="advance" class="">
    <div id="repo-content-pjax-container" class="repository-content ">
      <a href="https://github.dev/" class="d-none js-github-dev-shortcut" data-hotkey=".,Mod+Alt+.">Open in github.dev</a>
  <a href="https://github.dev/" class="d-none js-github-dev-new-tab-shortcut" data-hotkey="Shift+.,Shift+&gt;,&gt;" target="_blank" rel="noopener noreferrer">Open in a new github.dev tab</a>
    <a class="d-none" data-hotkey=",,Mod+Alt+," target="_blank" href="https://github.com/codespaces/new/Ahmad528/shoppingsite/tree/main?resume=1">Open in codespace</a>




    
      
    








<react-app app-name="react-code-view" initial-path="/Ahmad528/shoppingsite/blob/main/ERdiagram.jpg" style="display: block; min-height: calc(100vh - 64px);" data-attempted-ssr="true" data-ssr="true" data-lazy="false" data-alternate="false" data-data-router-enabled="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-app.embeddedData">{"payload":{"allShortcutsEnabled":true,"fileTree":{"":{"items":[{"name":"images","path":"images","contentType":"directory"},{"name":"ERdiagram.jpg","path":"ERdiagram.jpg","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"fooditem.js","path":"fooditem.js","contentType":"file"},{"name":"index.css","path":"index.css","contentType":"file"},{"name":"index.html","path":"index.html","contentType":"file"},{"name":"index.js","path":"index.js","contentType":"file"}],"totalCount":7}},"fileTreeProcessingTime":1.713692,"foldersToFetch":[],"repo":{"id":416351968,"defaultBranch":"main","name":"shoppingsite","ownerLogin":"Ahmad528","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2021-10-12T19:07:37.000+05:30","ownerAvatar":"https://avatars.githubusercontent.com/u/68517660?v=4","public":true,"private":false,"isOrgOwned":false},"codeLineWrapEnabled":false,"symbolsExpanded":false,"treeExpanded":true,"refInfo":{"name":"main","listCacheKey":"v0:1665291929.407496","canEdit":true,"refType":"branch","currentOid":"9ee36ca8ae57771555b23af93b7aed16873611cf"},"path":"ERdiagram.jpg","currentUser":{"id":195284315,"login":"AnanyaBansal28","userEmail":"ananya0259.becse24@chitkara.edu.in"},"blob":{"rawLines":null,"stylingDirectives":null,"colorizedLines":null,"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/Ahmad528/shoppingsite/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false},"displayName":"ERdiagram.jpg","displayUrl":"https://github.com/Ahmad528/shoppingsite/blob/main/ERdiagram.jpg?raw=true","headerInfo":{"blobSize":"19.6 KB","deleteTooltip":"Fork this repository and delete the file","editTooltip":"Fork this repository and edit the file","ghDesktopPath":"https://desktop.github.com","isGitLfs":false,"onBranch":true,"shortPath":"21025ed","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2FAhmad528%2Fshoppingsite%2Fblob%2Fmain%2FERdiagram.jpg","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":null,"truncatedSloc":null},"mode":"file"},"image":true,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplate":null,"discussionTemplate":null,"language":null,"languageID":null,"large":false,"planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/Ahmad528/shoppingsite/blob/main/ERdiagram.jpg","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","releasePath":"/Ahmad528/shoppingsite/releases/new?marketplace=true","showPublishActionBanner":false},"rawBlobUrl":"https://github.com/Ahmad528/shoppingsite/raw/refs/heads/main/ERdiagram.jpg","renderImageOrRaw":true,"richText":null,"renderedFileInfo":null,"shortPath":null,"symbolsEnabled":true,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","actionsOnboardingTip":null},"truncated":false,"viewable":false,"workflowRedirectUrl":null,"symbols":null},"copilotInfo":{"documentationUrl":"https://docs.github.com/copilot/overview-of-github-copilot/about-github-copilot-for-individuals","notices":{"codeViewPopover":{"dismissed":false,"dismissPath":"/settings/dismiss-notice/code_view_copilot_popover"}},"userAccess":{"hasSubscriptionEnded":false,"orgHasCFBAccess":false,"userHasCFIAccess":false,"userHasOrgs":false,"userIsOrgAdmin":false,"userIsOrgMember":false,"business":null,"featureRequestInfo":null}},"copilotAccessAllowed":false,"modelsAccessAllowed":false,"csrf_tokens":{"/Ahmad528/shoppingsite/branches":{"post":"CF6Gfw7kkVgKxQVLxpt1julmC6xSk2H-dVDPPH0ZuNgxOTN7S9a1gL1etVCkRLkfhk-iYSUDCTCr3lbJHbkTyg"},"/repos/preferences":{"post":"2DCmNu2waIKVFwpx3StwHY8bKz1CZgyipKJsLP87pAykn9U-4sdt-IJzvBFm1XEYWApZ2hB2uax9zOyLebyZ4Q"}}},"title":"shoppingsite/ERdiagram.jpg at main · Ahmad528/shoppingsite","appPayload":{"helpUrl":"https://docs.github.com","findFileWorkerPath":"/assets-cdn/worker/find-file-worker-2e45fb5767a8.js","findInFileWorkerPath":"/assets-cdn/worker/find-in-file-worker-0e487f66e7a0.js","githubDevUrl":"https://github.dev/","enabled_features":{"code_nav_ui_events":false,"overview_shared_code_dropdown_button":false,"react_blob_overlay":true,"copilot_conversational_ux_embedding_update":false,"copilot_smell_icebreaker_ux":true,"accessible_code_button":true}}}</script>
  <div data-target="react-app.reactRoot"><meta data-hydrostats="publish"> <!-- --> <!-- --> <button hidden="" data-testid="header-permalink-button" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="y,Shift+Y"></button><button hidden="" data-hotkey="y,Shift+Y"></button><div><div style="--sticky-pane-height: calc(100vh - (max(0px, 0px))); --spacing: var(--spacing-none);" class="Box-sc-g0xbh4-0 hOfjFo"><div class="Box-sc-g0xbh4-0 oDGAe"><div class="Box-sc-g0xbh4-0 kowOcT"><div tabindex="0" class="Box-sc-g0xbh4-0 gISSDQ"><div class="Box-sc-g0xbh4-0 cMnVPV"><div class="Box-sc-g0xbh4-0 hPvFuC"></div><div style="--pane-width:320px" class="Box-sc-g0xbh4-0 fFSoPl"><div><div id="repos-file-tree" class="Box-sc-g0xbh4-0 bNhwaa"><div class="Box-sc-g0xbh4-0 hNNCwk"><div class="Box-sc-g0xbh4-0 jfIeyl"><h2 class="Box-sc-g0xbh4-0 XosP prc-Heading-Heading-6CmGO"><span role="tooltip" aria-label="Collapse file tree" id="expand-button-file-tree-button" class="Tooltip__TooltipBase-sc-17tf59c-0 hWlpPn tooltipped-se"><button data-component="IconButton" type="button" data-testid="collapse-file-tree-button" aria-expanded="true" aria-controls="repos-file-tree" class="prc-Button-ButtonBase-c50BI position-relative ExpandFileTreeButton-module__expandButton--gL4is fgColor-muted prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="invisible" aria-describedby=":R356mplab:-loading-announcement" aria-labelledby="expand-button-file-tree-button" data-hotkey="Control+b"><svg aria-hidden="true" focusable="false" class="octicon octicon-sidebar-expand" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m4.177 7.823 2.396-2.396A.25.25 0 0 1 7 5.604v4.792a.25.25 0 0 1-.427.177L4.177 8.177a.25.25 0 0 1 0-.354Z"></path><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25H9.5v-13Zm12.5 13a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11v13Z"></path></svg></button></span><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+b"></button></h2><h2 class="Box-sc-g0xbh4-0 kOkWgo prc-Heading-Heading-6CmGO">Files</h2></div><div class="Box-sc-g0xbh4-0 lhbroM"><div class="Box-sc-g0xbh4-0 khzwtX"><button type="button" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-label="main branch" data-testid="anchor-button" class="Box-sc-g0xbh4-0 gMOVLe prc-Button-ButtonBase-c50BI react-repos-tree-pane-ref-selector width-full ref-selector-class" data-loading="false" data-size="medium" data-variant="default" aria-describedby="branch-picker-repos-header-ref-selector-loading-announcement" id="branch-picker-repos-header-ref-selector" data-hotkey="w"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="text" class="prc-Button-Label-pTQ3x"><div class="Box-sc-g0xbh4-0 bZBlpz"><div class="Box-sc-g0xbh4-0 lhTYNA"><svg aria-hidden="true" focusable="false" class="octicon octicon-git-branch" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg></div><div class="Box-sc-g0xbh4-0 ffLUq ref-selector-button-text-container"><span class="Text__StyledText-sc-17v1xeu-0 eMMFM">&nbsp;<!-- -->main</span></div></div></span><span data-component="trailingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></span></span></button><button hidden="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="w"></button></div><div class="Box-sc-g0xbh4-0 eTeVqd"><a sx="[object Object]" data-component="IconButton" type="button" aria-label="Add file" class="Box-sc-g0xbh4-0 fhbevO prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":R6q6mplab:-loading-announcement :Rq6mplab:" href="https://github.com/Ahmad528/shoppingsite/new/main"><svg aria-hidden="true" focusable="false" class="octicon octicon-plus" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg></a><span class="Tooltip__StyledTooltip-sc-e45c7z-0 jOyaRH" data-direction="s" aria-label="Add file" role="tooltip" aria-hidden="true" id=":Rq6mplab:" popover="auto">Add file</span><button data-component="IconButton" type="button" aria-label="Search this repository" class="Box-sc-g0xbh4-0 fCjIQM prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":R3a6mplab:-loading-announcement" data-hotkey="/"><svg aria-hidden="true" focusable="false" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="/"></button></div></div></div><div class="Box-sc-g0xbh4-0 qkmJR"><span class="TextInputWrapper__StyledTextInputBaseWrapper-sc-1mqhpbi-0 hLzFvi TextInputWrapper__StyledTextInputWrapper-sc-1mqhpbi-1 iHYdQq TextInput-wrapper" data-leading-visual="true" data-trailing-visual="true" aria-busy="false"><span class="TextInput-icon" id=":R5amplab:" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></span><input type="text" aria-label="Go to file" role="combobox" aria-controls="file-results-list" aria-expanded="false" aria-haspopup="dialog" autocorrect="off" spellcheck="false" placeholder="Go to file" aria-describedby=":R5amplab: :R5amplabH1:" data-component="input" class="UnstyledTextInput__ToggledUnstyledTextInput-sc-14ypya-0 jkNcAv" value=""><span class="TextInput-icon" id=":R5amplabH1:" aria-hidden="true"><div class="Box-sc-g0xbh4-0 dItACB"><kbd>t</kbd></div></span></span></div><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="t,Shift+T"></button><button hidden="" data-hotkey="t,Shift+T"></button><div class="Box-sc-g0xbh4-0 jbQqON"><div><div class="react-tree-show-tree-items"><div data-testid="repos-file-tree-container" class="Box-sc-g0xbh4-0 cOxzdh"><nav aria-label="File Tree Navigation"><span role="status" aria-live="polite" aria-atomic="true" class="_VisuallyHidden__VisuallyHidden-sc-11jhm7a-0 brGdpi"></span><ul role="tree" aria-label="Files" data-truncate-text="true" class="TreeView__UlBox-sc-4ex6b6-0 jgdSGi"><li class="PRIVATE_TreeView-item" tabindex="-1" id="images-item" role="treeitem" aria-labelledby=":r16:" aria-describedby=":r17:" aria-level="1" aria-expanded="false" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover PRIVATE_TreeView-item-toggle--end"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-right" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":r16:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r17:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" class="octicon octicon-file-directory-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>images</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="ERdiagram.jpg-item" role="treeitem" aria-labelledby=":r19:" aria-describedby=":r1a:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r19:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1a:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>ERdiagram.jpg</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="README.md-item" role="treeitem" aria-labelledby=":r1c:" aria-describedby=":r1d:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r1c:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1d:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>README.md</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="fooditem.js-item" role="treeitem" aria-labelledby=":r1f:" aria-describedby=":r1g:" aria-level="1" aria-selected="false" aria-current="true"><div class="PRIVATE_TreeView-item-container" style="--level: 1;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r1f:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1g:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>fooditem.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="index.css-item" role="treeitem" aria-labelledby=":r1i:" aria-describedby=":r1j:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r1i:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1j:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>index.css</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="index.html-item" role="treeitem" aria-labelledby=":r1l:" aria-describedby=":r1m:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r1l:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1m:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>index.html</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="index.js-item" role="treeitem" aria-labelledby=":r1o:" aria-describedby=":r1p:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r1o:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1p:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>index.js</span></span></div></div></li></ul></nav></div></div></div></div></div></div></div><div class="Box-sc-g0xbh4-0 tLGNc"><div role="slider" aria-label="Draggable pane splitter" aria-valuemin="256" aria-valuemax="569" aria-valuenow="320" aria-valuetext="Pane width 320 pixels" tabindex="0" class="Box-sc-g0xbh4-0 bHLmSv"></div></div></div></div><div class="Box-sc-g0xbh4-0 iKqMNA"><div class="Box-sc-g0xbh4-0"></div><div class="Box-sc-g0xbh4-0 FxAyp"><div data-selector="repos-split-pane-content" tabindex="0" class="Box-sc-g0xbh4-0 leYMvG"><div class="Box-sc-g0xbh4-0 KMPzq"><div class="Box-sc-g0xbh4-0 hfKjHv container"><div class="px-3 pt-3 pb-0" id="StickyHeader" style="position: sticky;"><div class="Box-sc-g0xbh4-0 gZWyZE"><div class="Box-sc-g0xbh4-0 dwYKDk"><div class="Box-sc-g0xbh4-0 iDtIiT"><div class="Box-sc-g0xbh4-0 cEytCf"><nav data-testid="breadcrumbs" aria-labelledby="repos-header-breadcrumb--wide-heading" id="repos-header-breadcrumb--wide" class="Box-sc-g0xbh4-0 fzFXnm"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vW4Cq prc-Heading-Heading-6CmGO" data-testid="screen-reader-heading" id="repos-header-breadcrumb--wide-heading">Breadcrumbs</h2><ol class="Box-sc-g0xbh4-0 iMnkmv"><li class="Box-sc-g0xbh4-0 ghzDag"><a class="Box-sc-g0xbh4-0 kHuKdh prc-Link-Link-85e08" sx="[object Object]" data-testid="breadcrumbs-repo-link" href="https://github.com/Ahmad528/shoppingsite/tree/main">shoppingsite</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Box-sc-g0xbh4-0 ghzDag"><span class="Text__StyledText-sc-17v1xeu-0 HlHVj" aria-hidden="true">/</span><h1 class="Box-sc-g0xbh4-0 jGhzSQ prc-Heading-Heading-6CmGO" tabindex="-1" id="file-name-id-wide">fooditem.js</h1></div><button data-component="IconButton" type="button" class="prc-Button-ButtonBase-c50BI ml-2 prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":R3td9lab:-loading-announcement" aria-labelledby=":Rdd9lab:"><svg aria-hidden="true" focusable="false" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button><span class="Tooltip__StyledTooltip-sc-e45c7z-0 jOyaRH CopyToClipboardButton-module__tooltip--Dq1IB" data-direction="nw" aria-label="Copy path" aria-hidden="true" id=":Rdd9lab:" popover="auto">Copy path</span></div></div><div class="react-code-view-header-element--wide"><div class="Box-sc-g0xbh4-0 faNtbn"><div class="d-flex gap-2"> <button hidden="" data-testid="" data-hotkey="l,Shift+L" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="l,Shift+L"></button><button hidden="" data-testid="" data-hotkey="Mod+Alt+g" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Mod+Alt+g"></button><button type="button" data-hotkey="b,Shift+B,Control+/ Control+b" class="Box-sc-g0xbh4-0 dwNhzn prc-Button-ButtonBase-c50BI" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":r1t:-loading-announcement"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="text" class="prc-Button-Label-pTQ3x">Blame</span></span></button><button hidden="" data-testid="" data-hotkey="b,Shift+B,Control+/ Control+b" data-hotkey-scope="read-only-cursor-text-area"></button><button data-component="IconButton" type="button" aria-label="More file actions" title="More file actions" data-testid="more-file-actions-button-nav-menu-wide" aria-haspopup="true" aria-expanded="false" tabindex="0" class="Box-sc-g0xbh4-0 fGwBZA prc-Button-ButtonBase-c50BI js-blob-dropdown-click prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":R156d9lab:-loading-announcement" id=":R156d9lab:"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button> </div></div></div><div class="react-code-view-header-element--narrow"><div class="Box-sc-g0xbh4-0 faNtbn"><div class="d-flex gap-2"> <button hidden="" data-testid="" data-hotkey="l,Shift+L" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="l,Shift+L"></button><button hidden="" data-testid="" data-hotkey="Mod+Alt+g" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Mod+Alt+g"></button><button type="button" data-hotkey="b,Shift+B,Control+/ Control+b" class="Box-sc-g0xbh4-0 dwNhzn prc-Button-ButtonBase-c50BI" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":r1u:-loading-announcement"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="text" class="prc-Button-Label-pTQ3x">Blame</span></span></button><button hidden="" data-testid="" data-hotkey="b,Shift+B,Control+/ Control+b" data-hotkey-scope="read-only-cursor-text-area"></button><button data-component="IconButton" type="button" aria-label="More file actions" title="More file actions" data-testid="more-file-actions-button-nav-menu-narrow" aria-haspopup="true" aria-expanded="false" tabindex="0" class="Box-sc-g0xbh4-0 fGwBZA prc-Button-ButtonBase-c50BI js-blob-dropdown-click prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":R157d9lab:-loading-announcement" id=":R157d9lab:"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button> </div></div></div></div></div></div></div></div><div class="Box-sc-g0xbh4-0 dJxjrT react-code-view-bottom-padding"> <div class="Box-sc-g0xbh4-0 eFxKDQ"></div> <!-- --> <!-- --> </div><div class="Box-sc-g0xbh4-0 dJxjrT"> <!-- --> <!-- --> <div class="d-flex flex-column border rounded-2 mb-3 pl-1"><div class="Box-sc-g0xbh4-0 dzCJzi"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vW4Cq prc-Heading-Heading-6CmGO" data-testid="screen-reader-heading">Latest commit</h2><div data-testid="latest-commit" class="Box-sc-g0xbh4-0 ePWWCk"><div class="Box-sc-g0xbh4-0 dpBUfI"><div data-testid="author-avatar" class="Box-sc-g0xbh4-0 hKWjvQ"><a class="prc-Link-Link-85e08" href="https://github.com/Ahmad528" data-testid="avatar-icon-link" data-hovercard-url="/users/Ahmad528/hovercard"><img data-component="Avatar" class="Box-sc-g0xbh4-0 cvdqJW prc-Avatar-Avatar-ZRS-m" alt="Ahmad528" width="20" height="20" src="./fooditem_files/68517660" data-testid="github-avatar" aria-label="Ahmad528" style="--avatarSize-regular: 20px;"></a><a class="Box-sc-g0xbh4-0 dkaFxu prc-Link-Link-85e08" data-muted="true" href="https://github.com/Ahmad528/shoppingsite/commits?author=Ahmad528" aria-label="commits by Ahmad528" data-hovercard-url="/users/Ahmad528/hovercard">Ahmad528</a></div><span class=""></span></div><div class="Box-sc-g0xbh4-0 erEOeb d-none d-sm-flex"><div class="Truncate flex-items-center f5"><span class="Text__StyledText-sc-17v1xeu-0 hWqAbU Truncate-text" data-testid="latest-commit-html"><a href="https://github.com/Ahmad528/shoppingsite/commit/2d67be08033980683bee8106a1e707c6bfc46bd1" class="Link--secondary" data-pjax="true" data-hovercard-url="/Ahmad528/shoppingsite/commit/2d67be08033980683bee8106a1e707c6bfc46bd1/hovercard">Add files via upload</a></span></div></div><span class="d-flex d-sm-none fgColor-muted f6"><relative-time class="sc-aXZVg" tense="past" datetime="2021-10-12T13:41:03.000Z" title="Oct 12, 2021, 7:11 PM GMT+5:30"><template shadowrootmode="open">4 years ago</template>Oct 12, 2021</relative-time></span></div><div class="d-flex flex-shrink-0 gap-2"><div data-testid="latest-commit-details" class="d-none d-sm-flex flex-items-center"><span class="d-flex flex-nowrap fgColor-muted f6"><a class="Link--secondary prc-Link-Link-85e08" aria-label="Commit 2d67be0" data-hovercard-url="/Ahmad528/shoppingsite/commit/2d67be08033980683bee8106a1e707c6bfc46bd1/hovercard" href="https://github.com/Ahmad528/shoppingsite/commit/2d67be08033980683bee8106a1e707c6bfc46bd1">2d67be0</a>&nbsp;·&nbsp;<relative-time class="sc-aXZVg" tense="past" datetime="2021-10-12T13:41:03.000Z" title="Oct 12, 2021, 7:11 PM GMT+5:30"><template shadowrootmode="open">4 years ago</template>Oct 12, 2021</relative-time></span></div><div class="d-flex gap-2"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vW4Cq prc-Heading-Heading-6CmGO" data-testid="screen-reader-heading">History</h2><a href="https://github.com/Ahmad528/shoppingsite/commits/main/fooditem.js" class="prc-Button-ButtonBase-c50BI d-none d-lg-flex LinkButton-module__code-view-link-button--xvCGA flex-items-center fgColor-default" data-loading="false" data-size="small" data-variant="invisible" aria-describedby=":R5dlal9lab:-loading-announcement"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x"><span class="fgColor-default">History</span></span></span></a><div class="d-sm-none"><button data-component="IconButton" type="button" aria-label="Open commit details" aria-pressed="false" aria-expanded="false" data-testid="latest-commit-details-toggle" class="Box-sc-g0xbh4-0 hdOVEE prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":r29:-loading-announcement"><svg aria-hidden="true" focusable="false" class="octicon octicon-ellipsis" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 5.75C0 4.784.784 4 1.75 4h12.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 14.25 12H1.75A1.75 1.75 0 0 1 0 10.25ZM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path></svg></button></div><div class="d-flex d-lg-none"><span role="tooltip" aria-label="History" id="history-icon-button-tooltip" class="Tooltip__TooltipBase-sc-17tf59c-0 hWlpPn tooltipped-n"><a href="https://github.com/Ahmad528/shoppingsite/commits/main/fooditem.js" class="prc-Button-ButtonBase-c50BI LinkButton-module__code-view-link-button--xvCGA flex-items-center fgColor-default" data-loading="false" data-size="small" data-variant="invisible" aria-describedby=":Rpdlal9lab:-loading-announcement history-icon-button-tooltip"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span></span></a></span></div></div></div></div></div><div class="Box-sc-g0xbh4-0 ldRxiI"><div class="Box-sc-g0xbh4-0 fVkfyA container"><div class="Box-sc-g0xbh4-0 gNAmSV react-code-size-details-banner"><div class="Box-sc-g0xbh4-0 jNEwzY react-code-size-details-banner"><div class="Box-sc-g0xbh4-0 bsDwxw text-mono"><div title="7.65 KB" data-testid="blob-size" class="Truncate__StyledTruncate-sc-23o1d2-0 eAtkQz"><span>404 lines (400 loc) · 7.65 KB</span></div></div></div><div class="react-code-size-details-banner"><button style="--button-color:fg.default" type="button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="Box-sc-g0xbh4-0 kXyYCF prc-Button-ButtonBase-c50BI" data-loading="false" data-size="small" data-variant="invisible" aria-describedby=":R15tal9lab:-loading-announcement" id=":R15tal9lab:"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-copilot" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x">Code 55% faster with GitHub Copilot</span></span></button></div></div><div class="Box-sc-g0xbh4-0 jdLMhu react-blob-view-header-sticky" id="repos-sticky-header"><div class="Box-sc-g0xbh4-0 tOISc"><div class="react-blob-sticky-header"><div class="Box-sc-g0xbh4-0 hqwSEx"><div class="Box-sc-g0xbh4-0 lzKZY"><div class="Box-sc-g0xbh4-0 fHind"><nav data-testid="breadcrumbs" aria-labelledby="sticky-breadcrumb-heading" id="sticky-breadcrumb" class="Box-sc-g0xbh4-0 fzFXnm"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vW4Cq prc-Heading-Heading-6CmGO" data-testid="screen-reader-heading" id="sticky-breadcrumb-heading">Breadcrumbs</h2><ol class="Box-sc-g0xbh4-0 iMnkmv"><li class="Box-sc-g0xbh4-0 ghzDag"><a class="Box-sc-g0xbh4-0 kHuKdh prc-Link-Link-85e08" sx="[object Object]" data-testid="breadcrumbs-repo-link" href="https://github.com/Ahmad528/shoppingsite/tree/main">shoppingsite</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Box-sc-g0xbh4-0 ghzDag"><span class="Text__StyledText-sc-17v1xeu-0 lauzFl" aria-hidden="true">/</span><h1 class="Box-sc-g0xbh4-0 dnZoUW prc-Heading-Heading-6CmGO" tabindex="-1" id="sticky-file-name-id">fooditem.js</h1></div></div><button style="--button-color:fg.default" type="button" class="Box-sc-g0xbh4-0 jRZWlf prc-Button-ButtonBase-c50BI" data-loading="false" data-size="small" data-variant="invisible" aria-describedby=":Riptal9lab:-loading-announcement"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-arrow-up" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M3.47 7.78a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018L9 4.81v7.44a.75.75 0 0 1-1.5 0V4.81L4.53 7.78a.75.75 0 0 1-1.06 0Z"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x">Top</span></span></button></div></div></div><div class="Box-sc-g0xbh4-0 kTvpNk"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vW4Cq prc-Heading-Heading-6CmGO" data-testid="screen-reader-heading">File metadata and controls</h2><div class="Box-sc-g0xbh4-0 iNMjfP"><ul aria-label="File view" class="SegmentedControl__SegmentedControlList-sc-1rzig82-0 lawgDG" data-size="small"><li class="Box-sc-g0xbh4-0 fefCSX" data-selected="true"><button aria-current="true" class="SegmentedControlButton__SegmentedControlButtonStyled-sc-8lkgxl-0 dbGjOi" type="button" data-hotkey="Control+/ Control+c"><span class="segmentedControl-content"><div class="Box-sc-g0xbh4-0 segmentedControl-text" data-text="Code">Code</div></span></button></li><li class="Box-sc-g0xbh4-0 idgUkN"><button aria-current="false" class="SegmentedControlButton__SegmentedControlButtonStyled-sc-8lkgxl-0 bHmvop" type="button" data-hotkey="b,Shift+B,Control+/ Control+b"><span class="segmentedControl-content"><div class="Box-sc-g0xbh4-0 segmentedControl-text" data-text="Blame">Blame</div></span></button></li></ul><button hidden="" data-testid="" data-hotkey="Control+/ Control+c" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="" data-hotkey="b,Shift+B,Control+/ Control+b" data-hotkey-scope="read-only-cursor-text-area"></button><div class="Box-sc-g0xbh4-0 jNEwzY react-code-size-details-in-header"><div class="Box-sc-g0xbh4-0 bsDwxw text-mono"><div title="7.65 KB" data-testid="blob-size" class="Truncate__StyledTruncate-sc-23o1d2-0 eAtkQz"><span>404 lines (400 loc) · 7.65 KB</span></div></div></div><div class="react-code-size-details-in-header"><button style="--button-color:fg.default" type="button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="Box-sc-g0xbh4-0 kXyYCF prc-Button-ButtonBase-c50BI" data-loading="false" data-size="small" data-variant="invisible" aria-describedby=":R3kptal9lab:-loading-announcement" id=":R3kptal9lab:"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-copilot" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x">Code 55% faster with GitHub Copilot</span></span></button></div></div><div class="Box-sc-g0xbh4-0 kcLCKF"><button hidden="" data-testid="" data-hotkey="Control+Shift+&gt;" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Control+Shift+&gt;"></button><button hidden="" data-testid="" data-hotkey="Control+Shift+&lt;" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Control+Shift+&lt;"></button><div class="Box-sc-g0xbh4-0 kVWtTz react-blob-header-edit-and-raw-actions"><div class="Box-sc-g0xbh4-0 prc-ButtonGroup-ButtonGroup-vcMeG"><div><a href="https://github.com/Ahmad528/shoppingsite/raw/refs/heads/main/fooditem.js" data-testid="raw-button" data-hotkey="Control+/ Control+r" class="Box-sc-g0xbh4-0 gWqxTd prc-Button-ButtonBase-c50BI" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-describedby=":r1v:-loading-announcement"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="text" class="prc-Button-Label-pTQ3x">Raw</span></span></a></div><div><button data-component="IconButton" type="button" aria-label="Copy raw content" data-testid="copy-raw-button" data-hotkey="Control+Shift+C" class="prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-describedby=":r20:-loading-announcement"><svg aria-hidden="true" focusable="false" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button></div><div><span role="tooltip" aria-label="Download raw file" id=":r21:" class="Tooltip__TooltipBase-sc-17tf59c-0 hWlpPn tooltipped-n"><button data-component="IconButton" type="button" aria-label="Download raw content" data-testid="download-raw-button" data-hotkey="Control+Shift+S" class="Box-sc-g0xbh4-0 ivobqY prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-describedby=":r22:-loading-announcement"><svg aria-hidden="true" focusable="false" class="octicon octicon-download" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path></svg></button></span></div></div><button hidden="" data-testid="raw-button-shortcut" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+/ Control+r"></button><button hidden="" data-testid="copy-raw-button-shortcut" data-hotkey="Control+Shift+C" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="download-raw-button-shortcut" data-hotkey="Control+Shift+S" data-hotkey-scope="read-only-cursor-text-area"></button><a class="js-github-dev-shortcut d-none prc-Link-Link-85e08" href="https://github.dev/" data-hotkey="., Control+Shift+/"></a><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="., Control+Shift+/"></button><a class="js-github-dev-new-tab-shortcut d-none prc-Link-Link-85e08" href="https://github.dev/" target="_blank" data-hotkey="Shift+.,Shift+&gt;,&gt;"></a><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Shift+.,Shift+&gt;,&gt;"></button><div class="Box-sc-g0xbh4-0 prc-ButtonGroup-ButtonGroup-vcMeG"><div><span role="tooltip" aria-label="Fork this repository and edit the file" id=":R6ksptal9lab:" class="Tooltip__TooltipBase-sc-17tf59c-0 hWlpPn tooltipped-nw"><a sx="[object Object]" data-component="IconButton" type="button" aria-label="Edit file" data-testid="edit-button" class="Box-sc-g0xbh4-0 kilKoS prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-describedby=":Rmksptal9lab:-loading-announcement" href="https://github.com/Ahmad528/shoppingsite/edit/main/fooditem.js" data-hotkey="e,Shift+E"><svg aria-hidden="true" focusable="false" class="octicon octicon-pencil" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg></a></span></div><div><button data-component="IconButton" type="button" aria-label="More edit options" data-testid="more-edit-button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-describedby=":Raksptal9lab:-loading-announcement" id=":Raksptal9lab:"><svg aria-hidden="true" focusable="false" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></button></div></div><button hidden="" data-testid="" data-hotkey="e,Shift+E" data-hotkey-scope="read-only-cursor-text-area"></button></div><span role="tooltip" aria-label="Open symbols panel" id=":r24:" class="Tooltip__TooltipBase-sc-17tf59c-0 hWlpPn tooltipped-nw"><button data-component="IconButton" type="button" aria-label="Symbols" aria-pressed="false" aria-expanded="false" aria-controls="symbols-pane" data-hotkey="Control+i" data-testid="symbols-button" class="Box-sc-g0xbh4-0 heuRGy prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby="symbols-button-loading-announcement" id="symbols-button"><svg aria-hidden="true" focusable="false" class="octicon octicon-code-square" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg></button></span><div class="react-blob-header-edit-and-raw-actions-combined"><button data-component="IconButton" type="button" aria-label="Edit and raw actions" title="More file actions" data-testid="more-file-actions-button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="Box-sc-g0xbh4-0 ffkqe prc-Button-ButtonBase-c50BI js-blob-dropdown-click prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":Rnsptal9lab:-loading-announcement" id=":Rnsptal9lab:"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button></div></div></div></div><div></div></div><div class="Box-sc-g0xbh4-0 hGyMdv"><section aria-labelledby="file-name-id-wide file-name-id-mobile" class="Box-sc-g0xbh4-0 dceWRL"><div class="Box-sc-g0xbh4-0 dGXHv"><div id="highlighted-line-menu-positioner" class="position-relative"><div id="copilot-button-positioner" class="Box-sc-g0xbh4-0 bpDFns"><div class="Box-sc-g0xbh4-0 iJOeCH"><div class="Box-sc-g0xbh4-0 eJSJhL"><div class="Box-sc-g0xbh4-0 EGCda"><div aria-hidden="true" data-testid="navigation-cursor" class="Box-sc-g0xbh4-0 code-navigation-cursor" style="top: 0px; left: 92px;"> </div><button hidden="" data-testid="NavigationCursorEnter" data-hotkey="Control+Enter" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorSetHighlightedLine" data-hotkey="Shift+J" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorSetHighlightAndExpandMenu" data-hotkey="Alt+Shift+C,Alt+Shift+Ç" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorPageDown" data-hotkey="PageDown" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorPageUp" data-hotkey="PageUp" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="" data-hotkey="/" data-hotkey-scope="read-only-cursor-text-area"></button></div></div><textarea id="read-only-cursor-text-area" data-testid="read-only-cursor-text-area" aria-label="file content" aria-readonly="true" inputmode="none" tabindex="0" aria-multiline="true" aria-haspopup="false" data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false" spellcheck="false" autocorrect="off" autocapitalize="off" autocomplete="off" data-ms-editor="false" class="react-blob-textarea react-blob-print-hide" style="resize: none; margin-top: -2px; padding-left: 92px; padding-right: 70px; width: 100%; background-color: unset; box-sizing: border-box; color: transparent; position: absolute; border: none; tab-size: 8; outline: none; overflow: auto hidden; height: 8100px; font-size: 12px; line-height: 20px; overflow-wrap: normal; overscroll-behavior-x: none; white-space: pre; z-index: 1;">const foodItem= [
    {
    id: 1,
    name: 'Ambur Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 13,
    img: 'images/biryani/Ambur-Chicken-Biryani.jpg',
    quantity: 1
},
{
    id: 2,
    name: 'Hyderabadi Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 15,
    img: 'images/biryani/Chicken-Biryani-hyd.jpg',
    quantity: 1
},
{
    id: 3,
    name: 'Egg Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 18,
    img: 'images/biryani/egg-biryani.jpeg',
    quantity: 1
},
{
    id: 4,
    name: 'Goan Fish Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 15,
    img: 'images/biryani/goan-fish-biryani.jpg',
    quantity: 1
},
{
    id: 5,
    name: 'Mutton Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 10,
    img: 'images/biryani/hyd-Mutton-Biryani.jpg',
    quantity: 1
},
{
    id: 6,
    name: 'Kamrupi Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 12,
    img: 'images/biryani/kamrupi-biryani.jpg',
    quantity: 1
},
{
    id: 7,
    name: 'Kashmiri Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 13,
    img: 'images/biryani/kashmiri.pulao.jpg',
    quantity: 1
},
{
    id: 8,
    name: 'Memoni Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 20,
    img: 'images/biryani/memonibiryani.png',
    quantity: 1
},
{
    id: 9,
    name: 'Mughlai Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 15,
    img: 'images/biryani/mughlai-biryani.jpg',
    quantity: 1
},
{
    id: 10,
    name: 'Chicken Roast',
    category : 'chicken',
    rating : 4.3,
    price: 11,
    img: 'images/chicken/Chicken_roast.jpg',
    quantity: 1
},
{
    id: 11,
    name: 'Chicken Curry',
    category : 'chicken',
    rating : 4.3,
    price: 10,
    img: 'images/chicken/Chicken-Curry.jpg',
    quantity: 1
},
{
    id: 12,
    name: 'Chicken Do Pyaza',
    category : 'chicken',
    rating : 4.3,
    price: 14,
    img: 'images/chicken/Chicken-do-Pyaza.jpg',
    quantity: 1
},
{
    id: 13,
    name: 'Chicken Masala',
    category : 'chicken',
    rating : 4.3,
    price: 12,
    img: 'images/chicken/Chicken-Masala.jpeg',
    quantity: 1
},
{
    id: 14,
    name: 'Handi Chicken',
    category : 'chicken',
    rating : 4.3,
    price: 17,
    img: 'images/chicken/Handi-chicken.jpg',
    quantity: 1
},
{
    id: 15,
    name: 'Murgh Musallam',
    category : 'chicken',
    rating : 4.3,
    price: 20,
    img: 'images/chicken/Murgh-Musallam.jpg',
    quantity: 1
},
{
    id: 16,
    name: 'Matar Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 15,
    img: 'images/paneer/Matar-Paneer.jpg',
    quantity: 1

},
{
    id: 17,
    name: 'Palak Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 10,
    img: 'images/paneer/palak-paneer.jpg',
    quantity: 1
},
{
    id: 18,
    name: 'Paneer Butter Masala',
    category : 'paneer',
    rating : 4.3,
    price: 15,
    img: 'images/paneer/paneer-butter-masala.jpg',
    quantity: 1

},
{
    id: 19,
    name: 'Paneer Do Pyaza',
    category : 'paneer',
    rating : 4.3,
    price: 12,
    img: 'images/paneer/Paneer-Do-Pyaza.jpg',
    quantity: 1

},
{
    id: 20,
    name: 'Hyderabadi Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 8,
    img: 'images/paneer/Paneer-Hyderabadi.jpg',
    quantity: 1
},
{
    id: 21,
    name: 'Paneer Lababdar',
    category : 'paneer',
    rating : 4.3,
    price: 7,
    img: 'images/paneer/paneer-lababdar.jpg',
    quantity: 1
},
{
    id: 22,
    name: 'Shahi Paneer',
    age: '32',
    category : 'paneer',
    rating : 4.3,
    price: 5,
    img: 'images/paneer/shahi-paneer.jpg',
    quantity: 1
},
{
    id: 23,
    name: 'Navratan Korma',
    category : 'vegetable',
    rating : 4.3,
    price: 8,
    img: 'images/vegetable/navratan-korma_-vegetable.png',
    quantity: 1
},
{
    id: 24,
    name: 'Veg Jalfrezi',
    category : 'vegetable',
    rating : 4.3,
    price: 7,
    img: 'images/vegetable/VEG-JALFREZI.jpg',
    quantity: 1
},
{
    id: 25,
    name: 'Veg Biryani',
    category : 'vegetable',
    rating : 4.3,
    price: 5,
    img: 'images/vegetable/vegetable-biryani.jpg',
    quantity: 1
},
{
    id: 26,
    name: 'Veg Curry',
    category : 'vegetable',
    rating : 4.3,
    price: 7,
    img: 'images/vegetable/vegetable-curry.jpeg',
    quantity: 1
},
{
    id: 27,
    name: 'Veg Kolhapur',
    category : 'vegetable',
    rating : 4.3,
    price: 10,
    img: 'images/vegetable/vegetable-kolhapuri.jpg',
    quantity: 1
},
{
    id: 28,
    name: 'Veg Masala',
    category : 'vegetable',
    rating : 4.3,
    price: 4,
    img: 'images/vegetable/vegetable-masala.jpg',
    quantity: 1
},
{
    id: 29,
    name: 'Veg Pakora',
    category : 'vegetable',
    rating : 4.3,
    price: 4,
    img: 'images/vegetable/vegetable-pakora.jpg',
    quantity: 1
},
{
    id: 30,
    name: 'Momos',
    category : 'chinese',
    rating : 4.3,
    price: 8,
    img: 'images/chinese/cabbage-momos-.jpg',
    quantity: 1
},
{
    id: 31,
    name: 'Chicken Manchurian',
    category : 'chinese',
    rating : 4.3,
    price: 7,
    img: 'images/chinese/ChickenManchurian.jpg',
    quantity: 1
},
{
    id: 32,
    name: 'Chili Chicken',
    category : 'chinese',
    rating : 4.3,
    price: 5,
    img: 'images/chinese/Chili-Chicken.jpg',
    quantity: 1
},
{
    id: 33,
    name: 'Chowmein',
    category : 'chinese',
    rating : 4.3,
    price: 16,
    img: 'images/chinese/chowmin.jpg',
    quantity: 1
},
{
    id: 34,
    name: 'Spring Roll',
    category : 'chinese',
    rating : 4.3,
    price: 14,
    img: 'images/chinese/spring-rolls.jpg',
    quantity: 1
},
{
    id: 35,
    name: 'Szechuan Chicken',
    category : 'chinese',
    rating : 4.3,
    price: 10,
    img: 'images/chinese/szechuan-chicken.jpg',
    quantity: 1
},
{
    id: 36,
    name: 'Fried Rice',
    category : 'chinese',
    rating : 4.3,
    price: 8,
    img: 'images/chinese/veg-fried-rice.jpg',
    quantity: 1
},
{
    id: 37,
    name: 'Butter Masala Dosa',
    category : 'south indian',
    rating : 4.3,
    price: 18,
    img: 'images/south indian/Butter-Masala-Dosa.png',
    quantity: 1
},
{
    id: 38,
    name: 'Idli',
    category : 'south indian',
    rating : 4.3,
    price: 20,
    img: 'images/south indian/idli-with-rice-flour.jpg',
    quantity: 1
},
{
    id: 39,
    name: 'Masala Dosa',
    category : 'south indian',
    rating : 4.3,
    price: 12,
    img: 'images/south indian/masala-dosa.jpg',
    quantity: 1
},
{
    id: 40,
    name: 'Mysore Bonda',
    category : 'south indian',
    rating : 4.3,
    price: 10,
    img: 'images/south indian/mysore-bonda.jpg',
    quantity: 1
},
{
    id: 41,
    name: 'Onion Uttapam',
    category : 'south indian',
    rating : 4.3,
    price: 15,
    img: 'images/south indian/onion-uttapam.jpg',
    quantity: 1
},
{
    id: 42,
    name: 'Plain Dosa',
    category : 'south indian',
    rating : 4.3,
    price: 40,
    img: 'images/south indian/plain-dosa.jpeg',
    quantity: 1
},
{
    id: 43,
    name: 'Rava Uttapam',
    category : 'south indian',
    rating : 4.3,
    price: 25,
    img: 'images/south indian/Rava-Uttapam.jpg',
    quantity: 1
},
{
    id: 44,
    name: 'Sambhar Vada',
    category : 'south indian',
    rating : 4.3,
    price: 34,
    img: 'images/south indian/sambhar-vada.jpg',
    quantity: 1
},
]

export {foodItem};</textarea><button hidden="" data-testid="" data-hotkey="Alt+F1,Control+Alt+˙,Control+Alt+h" data-hotkey-scope="read-only-cursor-text-area"></button><div class="Box-sc-g0xbh4-0 kHHiZS"><div tabindex="0" class="Box-sc-g0xbh4-0 jqUoVd"><div class="Box-sc-g0xbh4-0 kFEiQD react-code-file-contents" role="presentation" aria-hidden="true" data-tab-size="8" data-paste-markdown-skip="true" data-hpc="true"><div class="react-line-numbers-no-virtualization" style="pointer-events: auto; position: relative; z-index: 2;"><div class="react-no-virtualization-wrapper-lines"><div data-line-number="1" class="react-line-number react-code-text" style="padding-right: 16px;">1</div><div data-line-number="2" class="react-line-number react-code-text" style="padding-right: 16px;">2</div><div data-line-number="3" class="react-line-number react-code-text" style="padding-right: 16px;">3</div><div data-line-number="4" class="react-line-number react-code-text" style="padding-right: 16px;">4</div><div data-line-number="5" class="react-line-number react-code-text" style="padding-right: 16px;">5</div><div data-line-number="6" class="react-line-number react-code-text" style="padding-right: 16px;">6</div><div data-line-number="7" class="react-line-number react-code-text" style="padding-right: 16px;">7</div><div data-line-number="8" class="react-line-number react-code-text" style="padding-right: 16px;">8</div><div data-line-number="9" class="react-line-number react-code-text" style="padding-right: 16px;">9</div><div data-line-number="10" class="react-line-number react-code-text" style="padding-right: 16px;">10</div><div data-line-number="11" class="react-line-number react-code-text" style="padding-right: 16px;">11</div><div data-line-number="12" class="react-line-number react-code-text" style="padding-right: 16px;">12</div><div data-line-number="13" class="react-line-number react-code-text" style="padding-right: 16px;">13</div><div data-line-number="14" class="react-line-number react-code-text" style="padding-right: 16px;">14</div><div data-line-number="15" class="react-line-number react-code-text" style="padding-right: 16px;">15</div><div data-line-number="16" class="react-line-number react-code-text" style="padding-right: 16px;">16</div><div data-line-number="17" class="react-line-number react-code-text" style="padding-right: 16px;">17</div><div data-line-number="18" class="react-line-number react-code-text" style="padding-right: 16px;">18</div><div data-line-number="19" class="react-line-number react-code-text" style="padding-right: 16px;">19</div><div data-line-number="20" class="react-line-number react-code-text" style="padding-right: 16px;">20</div><div data-line-number="21" class="react-line-number react-code-text" style="padding-right: 16px;">21</div><div data-line-number="22" class="react-line-number react-code-text" style="padding-right: 16px;">22</div><div data-line-number="23" class="react-line-number react-code-text" style="padding-right: 16px;">23</div><div data-line-number="24" class="react-line-number react-code-text" style="padding-right: 16px;">24</div><div data-line-number="25" class="react-line-number react-code-text" style="padding-right: 16px;">25</div><div data-line-number="26" class="react-line-number react-code-text" style="padding-right: 16px;">26</div><div data-line-number="27" class="react-line-number react-code-text" style="padding-right: 16px;">27</div><div data-line-number="28" class="react-line-number react-code-text" style="padding-right: 16px;">28</div><div data-line-number="29" class="react-line-number react-code-text" style="padding-right: 16px;">29</div><div data-line-number="30" class="react-line-number react-code-text" style="padding-right: 16px;">30</div><div data-line-number="31" class="react-line-number react-code-text" style="padding-right: 16px;">31</div><div data-line-number="32" class="react-line-number react-code-text" style="padding-right: 16px;">32</div><div data-line-number="33" class="react-line-number react-code-text" style="padding-right: 16px;">33</div><div data-line-number="34" class="react-line-number react-code-text" style="padding-right: 16px;">34</div><div data-line-number="35" class="react-line-number react-code-text" style="padding-right: 16px;">35</div><div data-line-number="36" class="react-line-number react-code-text" style="padding-right: 16px;">36</div><div data-line-number="37" class="react-line-number react-code-text" style="padding-right: 16px;">37</div><div data-line-number="38" class="react-line-number react-code-text" style="padding-right: 16px;">38</div><div data-line-number="39" class="react-line-number react-code-text" style="padding-right: 16px;">39</div><div data-line-number="40" class="react-line-number react-code-text" style="padding-right: 16px;">40</div><div data-line-number="41" class="react-line-number react-code-text" style="padding-right: 16px;">41</div><div data-line-number="42" class="react-line-number react-code-text" style="padding-right: 16px;">42</div><div data-line-number="43" class="react-line-number react-code-text" style="padding-right: 16px;">43</div><div data-line-number="44" class="react-line-number react-code-text" style="padding-right: 16px;">44</div><div data-line-number="45" class="react-line-number react-code-text" style="padding-right: 16px;">45</div><div data-line-number="46" class="react-line-number react-code-text" style="padding-right: 16px;">46</div><div data-line-number="47" class="react-line-number react-code-text" style="padding-right: 16px;">47</div><div data-line-number="48" class="react-line-number react-code-text" style="padding-right: 16px;">48</div><div data-line-number="49" class="react-line-number react-code-text" style="padding-right: 16px;">49</div><div data-line-number="50" class="react-line-number react-code-text" style="padding-right: 16px;">50</div><div data-line-number="51" class="react-line-number react-code-text" style="padding-right: 16px;">51</div><div data-line-number="52" class="react-line-number react-code-text" style="padding-right: 16px;">52</div><div data-line-number="53" class="react-line-number react-code-text" style="padding-right: 16px;">53</div><div data-line-number="54" class="react-line-number react-code-text" style="padding-right: 16px;">54</div><div data-line-number="55" class="react-line-number react-code-text" style="padding-right: 16px;">55</div><div data-line-number="56" class="react-line-number react-code-text" style="padding-right: 16px;">56</div><div data-line-number="57" class="react-line-number react-code-text" style="padding-right: 16px;">57</div><div data-line-number="58" class="react-line-number react-code-text" style="padding-right: 16px;">58</div><div data-line-number="59" class="react-line-number react-code-text" style="padding-right: 16px;">59</div><div data-line-number="60" class="react-line-number react-code-text" style="padding-right: 16px;">60</div></div><div class="react-no-virtualization-wrapper-lines"><div data-line-number="61" class="react-line-number react-code-text" style="padding-right: 16px;">61</div><div data-line-number="62" class="react-line-number react-code-text" style="padding-right: 16px;">62</div><div data-line-number="63" class="react-line-number react-code-text" style="padding-right: 16px;">63</div><div data-line-number="64" class="react-line-number react-code-text" style="padding-right: 16px;">64</div><div data-line-number="65" class="react-line-number react-code-text" style="padding-right: 16px;">65</div><div data-line-number="66" class="react-line-number react-code-text" style="padding-right: 16px;">66</div><div data-line-number="67" class="react-line-number react-code-text" style="padding-right: 16px;">67</div><div data-line-number="68" class="react-line-number react-code-text" style="padding-right: 16px;">68</div><div data-line-number="69" class="react-line-number react-code-text" style="padding-right: 16px;">69</div><div data-line-number="70" class="react-line-number react-code-text" style="padding-right: 16px;">70</div><div data-line-number="71" class="react-line-number react-code-text" style="padding-right: 16px;">71</div><div data-line-number="72" class="react-line-number react-code-text" style="padding-right: 16px;">72</div><div data-line-number="73" class="react-line-number react-code-text" style="padding-right: 16px;">73</div><div data-line-number="74" class="react-line-number react-code-text" style="padding-right: 16px;">74</div><div data-line-number="75" class="react-line-number react-code-text" style="padding-right: 16px;">75</div><div data-line-number="76" class="react-line-number react-code-text" style="padding-right: 16px;">76</div><div data-line-number="77" class="react-line-number react-code-text" style="padding-right: 16px;">77</div><div data-line-number="78" class="react-line-number react-code-text" style="padding-right: 16px;">78</div><div data-line-number="79" class="react-line-number react-code-text" style="padding-right: 16px;">79</div><div data-line-number="80" class="react-line-number react-code-text" style="padding-right: 16px;">80</div><div data-line-number="81" class="react-line-number react-code-text" style="padding-right: 16px;">81</div><div data-line-number="82" class="react-line-number react-code-text" style="padding-right: 16px;">82</div><div data-line-number="83" class="react-line-number react-code-text" style="padding-right: 16px;">83</div><div data-line-number="84" class="react-line-number react-code-text" style="padding-right: 16px;">84</div><div data-line-number="85" class="react-line-number react-code-text" style="padding-right: 16px;">85</div><div data-line-number="86" class="react-line-number react-code-text" style="padding-right: 16px;">86</div><div data-line-number="87" class="react-line-number react-code-text" style="padding-right: 16px;">87</div><div data-line-number="88" class="react-line-number react-code-text" style="padding-right: 16px;">88</div><div data-line-number="89" class="react-line-number react-code-text" style="padding-right: 16px;">89</div><div data-line-number="90" class="react-line-number react-code-text" style="padding-right: 16px;">90</div><div data-line-number="91" class="react-line-number react-code-text" style="padding-right: 16px;">91</div><div data-line-number="92" class="react-line-number react-code-text" style="padding-right: 16px;">92</div><div data-line-number="93" class="react-line-number react-code-text" style="padding-right: 16px;">93</div><div data-line-number="94" class="react-line-number react-code-text" style="padding-right: 16px;">94</div><div data-line-number="95" class="react-line-number react-code-text" style="padding-right: 16px;">95</div><div data-line-number="96" class="react-line-number react-code-text" style="padding-right: 16px;">96</div><div data-line-number="97" class="react-line-number react-code-text" style="padding-right: 16px;">97</div><div data-line-number="98" class="react-line-number react-code-text" style="padding-right: 16px;">98</div><div data-line-number="99" class="react-line-number react-code-text" style="padding-right: 16px;">99</div><div data-line-number="100" class="react-line-number react-code-text" style="padding-right: 16px;">100</div><div data-line-number="101" class="react-line-number react-code-text" style="padding-right: 16px;">101</div><div data-line-number="102" class="react-line-number react-code-text" style="padding-right: 16px;">102</div><div data-line-number="103" class="react-line-number react-code-text" style="padding-right: 16px;">103</div><div data-line-number="104" class="react-line-number react-code-text" style="padding-right: 16px;">104</div><div data-line-number="105" class="react-line-number react-code-text" style="padding-right: 16px;">105</div><div data-line-number="106" class="react-line-number react-code-text" style="padding-right: 16px;">106</div><div data-line-number="107" class="react-line-number react-code-text" style="padding-right: 16px;">107</div><div data-line-number="108" class="react-line-number react-code-text" style="padding-right: 16px;">108</div><div data-line-number="109" class="react-line-number react-code-text" style="padding-right: 16px;">109</div><div data-line-number="110" class="react-line-number react-code-text" style="padding-right: 16px;">110</div><div data-line-number="111" class="react-line-number react-code-text" style="padding-right: 16px;">111</div><div data-line-number="112" class="react-line-number react-code-text" style="padding-right: 16px;">112</div><div data-line-number="113" class="react-line-number react-code-text" style="padding-right: 16px;">113</div><div data-line-number="114" class="react-line-number react-code-text" style="padding-right: 16px;">114</div><div data-line-number="115" class="react-line-number react-code-text" style="padding-right: 16px;">115</div><div data-line-number="116" class="react-line-number react-code-text" style="padding-right: 16px;">116</div><div data-line-number="117" class="react-line-number react-code-text" style="padding-right: 16px;">117</div><div data-line-number="118" class="react-line-number react-code-text" style="padding-right: 16px;">118</div><div data-line-number="119" class="react-line-number react-code-text" style="padding-right: 16px;">119</div><div data-line-number="120" class="react-line-number react-code-text" style="padding-right: 16px;">120</div></div><div class="react-no-virtualization-wrapper-lines"><div data-line-number="121" class="react-line-number react-code-text" style="padding-right: 16px;">121</div><div data-line-number="122" class="react-line-number react-code-text" style="padding-right: 16px;">122</div><div data-line-number="123" class="react-line-number react-code-text" style="padding-right: 16px;">123</div><div data-line-number="124" class="react-line-number react-code-text" style="padding-right: 16px;">124</div><div data-line-number="125" class="react-line-number react-code-text" style="padding-right: 16px;">125</div><div data-line-number="126" class="react-line-number react-code-text" style="padding-right: 16px;">126</div><div data-line-number="127" class="react-line-number react-code-text" style="padding-right: 16px;">127</div><div data-line-number="128" class="react-line-number react-code-text" style="padding-right: 16px;">128</div><div data-line-number="129" class="react-line-number react-code-text" style="padding-right: 16px;">129</div><div data-line-number="130" class="react-line-number react-code-text" style="padding-right: 16px;">130</div><div data-line-number="131" class="react-line-number react-code-text" style="padding-right: 16px;">131</div><div data-line-number="132" class="react-line-number react-code-text" style="padding-right: 16px;">132</div><div data-line-number="133" class="react-line-number react-code-text" style="padding-right: 16px;">133</div><div data-line-number="134" class="react-line-number react-code-text" style="padding-right: 16px;">134</div><div data-line-number="135" class="react-line-number react-code-text" style="padding-right: 16px;">135</div><div data-line-number="136" class="react-line-number react-code-text" style="padding-right: 16px;">136</div><div data-line-number="137" class="react-line-number react-code-text" style="padding-right: 16px;">137</div><div data-line-number="138" class="react-line-number react-code-text" style="padding-right: 16px;">138</div><div data-line-number="139" class="react-line-number react-code-text" style="padding-right: 16px;">139</div><div data-line-number="140" class="react-line-number react-code-text" style="padding-right: 16px;">140</div><div data-line-number="141" class="react-line-number react-code-text" style="padding-right: 16px;">141</div><div data-line-number="142" class="react-line-number react-code-text" style="padding-right: 16px;">142</div><div data-line-number="143" class="react-line-number react-code-text" style="padding-right: 16px;">143</div><div data-line-number="144" class="react-line-number react-code-text" style="padding-right: 16px;">144</div><div data-line-number="145" class="react-line-number react-code-text" style="padding-right: 16px;">145</div><div data-line-number="146" class="react-line-number react-code-text" style="padding-right: 16px;">146</div><div data-line-number="147" class="react-line-number react-code-text" style="padding-right: 16px;">147</div><div data-line-number="148" class="react-line-number react-code-text" style="padding-right: 16px;">148</div><div data-line-number="149" class="react-line-number react-code-text" style="padding-right: 16px;">149</div><div data-line-number="150" class="react-line-number react-code-text" style="padding-right: 16px;">150</div><div data-line-number="151" class="react-line-number react-code-text" style="padding-right: 16px;">151</div><div data-line-number="152" class="react-line-number react-code-text" style="padding-right: 16px;">152</div><div data-line-number="153" class="react-line-number react-code-text" style="padding-right: 16px;">153</div><div data-line-number="154" class="react-line-number react-code-text" style="padding-right: 16px;">154</div><div data-line-number="155" class="react-line-number react-code-text" style="padding-right: 16px;">155</div><div data-line-number="156" class="react-line-number react-code-text" style="padding-right: 16px;">156</div><div data-line-number="157" class="react-line-number react-code-text" style="padding-right: 16px;">157</div><div data-line-number="158" class="react-line-number react-code-text" style="padding-right: 16px;">158</div><div data-line-number="159" class="react-line-number react-code-text" style="padding-right: 16px;">159</div><div data-line-number="160" class="react-line-number react-code-text" style="padding-right: 16px;">160</div><div data-line-number="161" class="react-line-number react-code-text" style="padding-right: 16px;">161</div><div data-line-number="162" class="react-line-number react-code-text" style="padding-right: 16px;">162</div><div data-line-number="163" class="react-line-number react-code-text" style="padding-right: 16px;">163</div><div data-line-number="164" class="react-line-number react-code-text" style="padding-right: 16px;">164</div><div data-line-number="165" class="react-line-number react-code-text" style="padding-right: 16px;">165</div><div data-line-number="166" class="react-line-number react-code-text" style="padding-right: 16px;">166</div><div data-line-number="167" class="react-line-number react-code-text" style="padding-right: 16px;">167</div><div data-line-number="168" class="react-line-number react-code-text" style="padding-right: 16px;">168</div><div data-line-number="169" class="react-line-number react-code-text" style="padding-right: 16px;">169</div><div data-line-number="170" class="react-line-number react-code-text" style="padding-right: 16px;">170</div><div data-line-number="171" class="react-line-number react-code-text" style="padding-right: 16px;">171</div><div data-line-number="172" class="react-line-number react-code-text" style="padding-right: 16px;">172</div><div data-line-number="173" class="react-line-number react-code-text" style="padding-right: 16px;">173</div><div data-line-number="174" class="react-line-number react-code-text" style="padding-right: 16px;">174</div><div data-line-number="175" class="react-line-number react-code-text" style="padding-right: 16px;">175</div><div data-line-number="176" class="react-line-number react-code-text" style="padding-right: 16px;">176</div><div data-line-number="177" class="react-line-number react-code-text" style="padding-right: 16px;">177</div><div data-line-number="178" class="react-line-number react-code-text" style="padding-right: 16px;">178</div><div data-line-number="179" class="react-line-number react-code-text" style="padding-right: 16px;">179</div><div data-line-number="180" class="react-line-number react-code-text" style="padding-right: 16px;">180</div></div><div class="react-no-virtualization-wrapper-lines"><div data-line-number="181" class="react-line-number react-code-text" style="padding-right: 16px;">181</div><div data-line-number="182" class="react-line-number react-code-text" style="padding-right: 16px;">182</div><div data-line-number="183" class="react-line-number react-code-text" style="padding-right: 16px;">183</div><div data-line-number="184" class="react-line-number react-code-text" style="padding-right: 16px;">184</div><div data-line-number="185" class="react-line-number react-code-text" style="padding-right: 16px;">185</div><div data-line-number="186" class="react-line-number react-code-text" style="padding-right: 16px;">186</div><div data-line-number="187" class="react-line-number react-code-text" style="padding-right: 16px;">187</div><div data-line-number="188" class="react-line-number react-code-text" style="padding-right: 16px;">188</div><div data-line-number="189" class="react-line-number react-code-text" style="padding-right: 16px;">189</div><div data-line-number="190" class="react-line-number react-code-text" style="padding-right: 16px;">190</div><div data-line-number="191" class="react-line-number react-code-text" style="padding-right: 16px;">191</div><div data-line-number="192" class="react-line-number react-code-text" style="padding-right: 16px;">192</div><div data-line-number="193" class="react-line-number react-code-text" style="padding-right: 16px;">193</div><div data-line-number="194" class="react-line-number react-code-text" style="padding-right: 16px;">194</div><div data-line-number="195" class="react-line-number react-code-text" style="padding-right: 16px;">195</div><div data-line-number="196" class="react-line-number react-code-text" style="padding-right: 16px;">196</div><div data-line-number="197" class="react-line-number react-code-text" style="padding-right: 16px;">197</div><div data-line-number="198" class="react-line-number react-code-text" style="padding-right: 16px;">198</div><div data-line-number="199" class="react-line-number react-code-text" style="padding-right: 16px;">199</div><div data-line-number="200" class="react-line-number react-code-text" style="padding-right: 16px;">200</div><div data-line-number="201" class="react-line-number react-code-text" style="padding-right: 16px;">201</div><div data-line-number="202" class="react-line-number react-code-text" style="padding-right: 16px;">202</div><div data-line-number="203" class="react-line-number react-code-text" style="padding-right: 16px;">203</div><div data-line-number="204" class="react-line-number react-code-text" style="padding-right: 16px;">204</div><div data-line-number="205" class="react-line-number react-code-text" style="padding-right: 16px;">205</div><div data-line-number="206" class="react-line-number react-code-text" style="padding-right: 16px;">206</div><div data-line-number="207" class="react-line-number react-code-text" style="padding-right: 16px;">207</div><div data-line-number="208" class="react-line-number react-code-text" style="padding-right: 16px;">208</div><div data-line-number="209" class="react-line-number react-code-text" style="padding-right: 16px;">209</div><div data-line-number="210" class="react-line-number react-code-text" style="padding-right: 16px;">210</div><div data-line-number="211" class="react-line-number react-code-text" style="padding-right: 16px;">211</div><div data-line-number="212" class="react-line-number react-code-text" style="padding-right: 16px;">212</div><div data-line-number="213" class="react-line-number react-code-text" style="padding-right: 16px;">213</div><div data-line-number="214" class="react-line-number react-code-text" style="padding-right: 16px;">214</div><div data-line-number="215" class="react-line-number react-code-text" style="padding-right: 16px;">215</div><div data-line-number="216" class="react-line-number react-code-text" style="padding-right: 16px;">216</div><div data-line-number="217" class="react-line-number react-code-text" style="padding-right: 16px;">217</div><div data-line-number="218" class="react-line-number react-code-text" style="padding-right: 16px;">218</div><div data-line-number="219" class="react-line-number react-code-text" style="padding-right: 16px;">219</div><div data-line-number="220" class="react-line-number react-code-text" style="padding-right: 16px;">220</div><div data-line-number="221" class="react-line-number react-code-text" style="padding-right: 16px;">221</div><div data-line-number="222" class="react-line-number react-code-text" style="padding-right: 16px;">222</div><div data-line-number="223" class="react-line-number react-code-text" style="padding-right: 16px;">223</div><div data-line-number="224" class="react-line-number react-code-text" style="padding-right: 16px;">224</div><div data-line-number="225" class="react-line-number react-code-text" style="padding-right: 16px;">225</div><div data-line-number="226" class="react-line-number react-code-text" style="padding-right: 16px;">226</div><div data-line-number="227" class="react-line-number react-code-text" style="padding-right: 16px;">227</div><div data-line-number="228" class="react-line-number react-code-text" style="padding-right: 16px;">228</div><div data-line-number="229" class="react-line-number react-code-text" style="padding-right: 16px;">229</div><div data-line-number="230" class="react-line-number react-code-text" style="padding-right: 16px;">230</div><div data-line-number="231" class="react-line-number react-code-text" style="padding-right: 16px;">231</div><div data-line-number="232" class="react-line-number react-code-text" style="padding-right: 16px;">232</div><div data-line-number="233" class="react-line-number react-code-text" style="padding-right: 16px;">233</div><div data-line-number="234" class="react-line-number react-code-text" style="padding-right: 16px;">234</div><div data-line-number="235" class="react-line-number react-code-text" style="padding-right: 16px;">235</div><div data-line-number="236" class="react-line-number react-code-text" style="padding-right: 16px;">236</div><div data-line-number="237" class="react-line-number react-code-text" style="padding-right: 16px;">237</div><div data-line-number="238" class="react-line-number react-code-text" style="padding-right: 16px;">238</div><div data-line-number="239" class="react-line-number react-code-text" style="padding-right: 16px;">239</div><div data-line-number="240" class="react-line-number react-code-text" style="padding-right: 16px;">240</div></div><div class="react-no-virtualization-wrapper-lines"><div data-line-number="241" class="react-line-number react-code-text" style="padding-right: 16px;">241</div><div data-line-number="242" class="react-line-number react-code-text" style="padding-right: 16px;">242</div><div data-line-number="243" class="react-line-number react-code-text" style="padding-right: 16px;">243</div><div data-line-number="244" class="react-line-number react-code-text" style="padding-right: 16px;">244</div><div data-line-number="245" class="react-line-number react-code-text" style="padding-right: 16px;">245</div><div data-line-number="246" class="react-line-number react-code-text" style="padding-right: 16px;">246</div><div data-line-number="247" class="react-line-number react-code-text" style="padding-right: 16px;">247</div><div data-line-number="248" class="react-line-number react-code-text" style="padding-right: 16px;">248</div><div data-line-number="249" class="react-line-number react-code-text" style="padding-right: 16px;">249</div><div data-line-number="250" class="react-line-number react-code-text" style="padding-right: 16px;">250</div><div data-line-number="251" class="react-line-number react-code-text" style="padding-right: 16px;">251</div><div data-line-number="252" class="react-line-number react-code-text" style="padding-right: 16px;">252</div><div data-line-number="253" class="react-line-number react-code-text" style="padding-right: 16px;">253</div><div data-line-number="254" class="react-line-number react-code-text" style="padding-right: 16px;">254</div><div data-line-number="255" class="react-line-number react-code-text" style="padding-right: 16px;">255</div><div data-line-number="256" class="react-line-number react-code-text" style="padding-right: 16px;">256</div><div data-line-number="257" class="react-line-number react-code-text" style="padding-right: 16px;">257</div><div data-line-number="258" class="react-line-number react-code-text" style="padding-right: 16px;">258</div><div data-line-number="259" class="react-line-number react-code-text" style="padding-right: 16px;">259</div><div data-line-number="260" class="react-line-number react-code-text" style="padding-right: 16px;">260</div><div data-line-number="261" class="react-line-number react-code-text" style="padding-right: 16px;">261</div><div data-line-number="262" class="react-line-number react-code-text" style="padding-right: 16px;">262</div><div data-line-number="263" class="react-line-number react-code-text" style="padding-right: 16px;">263</div><div data-line-number="264" class="react-line-number react-code-text" style="padding-right: 16px;">264</div><div data-line-number="265" class="react-line-number react-code-text" style="padding-right: 16px;">265</div><div data-line-number="266" class="react-line-number react-code-text" style="padding-right: 16px;">266</div><div data-line-number="267" class="react-line-number react-code-text" style="padding-right: 16px;">267</div><div data-line-number="268" class="react-line-number react-code-text" style="padding-right: 16px;">268</div><div data-line-number="269" class="react-line-number react-code-text" style="padding-right: 16px;">269</div><div data-line-number="270" class="react-line-number react-code-text" style="padding-right: 16px;">270</div><div data-line-number="271" class="react-line-number react-code-text" style="padding-right: 16px;">271</div><div data-line-number="272" class="react-line-number react-code-text" style="padding-right: 16px;">272</div><div data-line-number="273" class="react-line-number react-code-text" style="padding-right: 16px;">273</div><div data-line-number="274" class="react-line-number react-code-text" style="padding-right: 16px;">274</div><div data-line-number="275" class="react-line-number react-code-text" style="padding-right: 16px;">275</div><div data-line-number="276" class="react-line-number react-code-text" style="padding-right: 16px;">276</div><div data-line-number="277" class="react-line-number react-code-text" style="padding-right: 16px;">277</div><div data-line-number="278" class="react-line-number react-code-text" style="padding-right: 16px;">278</div><div data-line-number="279" class="react-line-number react-code-text" style="padding-right: 16px;">279</div><div data-line-number="280" class="react-line-number react-code-text" style="padding-right: 16px;">280</div><div data-line-number="281" class="react-line-number react-code-text" style="padding-right: 16px;">281</div><div data-line-number="282" class="react-line-number react-code-text" style="padding-right: 16px;">282</div><div data-line-number="283" class="react-line-number react-code-text" style="padding-right: 16px;">283</div><div data-line-number="284" class="react-line-number react-code-text" style="padding-right: 16px;">284</div><div data-line-number="285" class="react-line-number react-code-text" style="padding-right: 16px;">285</div><div data-line-number="286" class="react-line-number react-code-text" style="padding-right: 16px;">286</div><div data-line-number="287" class="react-line-number react-code-text" style="padding-right: 16px;">287</div><div data-line-number="288" class="react-line-number react-code-text" style="padding-right: 16px;">288</div><div data-line-number="289" class="react-line-number react-code-text" style="padding-right: 16px;">289</div><div data-line-number="290" class="react-line-number react-code-text" style="padding-right: 16px;">290</div><div data-line-number="291" class="react-line-number react-code-text" style="padding-right: 16px;">291</div><div data-line-number="292" class="react-line-number react-code-text" style="padding-right: 16px;">292</div><div data-line-number="293" class="react-line-number react-code-text" style="padding-right: 16px;">293</div><div data-line-number="294" class="react-line-number react-code-text" style="padding-right: 16px;">294</div><div data-line-number="295" class="react-line-number react-code-text" style="padding-right: 16px;">295</div><div data-line-number="296" class="react-line-number react-code-text" style="padding-right: 16px;">296</div><div data-line-number="297" class="react-line-number react-code-text" style="padding-right: 16px;">297</div><div data-line-number="298" class="react-line-number react-code-text" style="padding-right: 16px;">298</div><div data-line-number="299" class="react-line-number react-code-text" style="padding-right: 16px;">299</div><div data-line-number="300" class="react-line-number react-code-text" style="padding-right: 16px;">300</div></div><div class="react-no-virtualization-wrapper-lines"><div data-line-number="301" class="react-line-number react-code-text" style="padding-right: 16px;">301</div><div data-line-number="302" class="react-line-number react-code-text" style="padding-right: 16px;">302</div><div data-line-number="303" class="react-line-number react-code-text" style="padding-right: 16px;">303</div><div data-line-number="304" class="react-line-number react-code-text" style="padding-right: 16px;">304</div><div data-line-number="305" class="react-line-number react-code-text" style="padding-right: 16px;">305</div><div data-line-number="306" class="react-line-number react-code-text" style="padding-right: 16px;">306</div><div data-line-number="307" class="react-line-number react-code-text" style="padding-right: 16px;">307</div><div data-line-number="308" class="react-line-number react-code-text" style="padding-right: 16px;">308</div><div data-line-number="309" class="react-line-number react-code-text" style="padding-right: 16px;">309</div><div data-line-number="310" class="react-line-number react-code-text" style="padding-right: 16px;">310</div><div data-line-number="311" class="react-line-number react-code-text" style="padding-right: 16px;">311</div><div data-line-number="312" class="react-line-number react-code-text" style="padding-right: 16px;">312</div><div data-line-number="313" class="react-line-number react-code-text" style="padding-right: 16px;">313</div><div data-line-number="314" class="react-line-number react-code-text" style="padding-right: 16px;">314</div><div data-line-number="315" class="react-line-number react-code-text" style="padding-right: 16px;">315</div><div data-line-number="316" class="react-line-number react-code-text" style="padding-right: 16px;">316</div><div data-line-number="317" class="react-line-number react-code-text" style="padding-right: 16px;">317</div><div data-line-number="318" class="react-line-number react-code-text" style="padding-right: 16px;">318</div><div data-line-number="319" class="react-line-number react-code-text" style="padding-right: 16px;">319</div><div data-line-number="320" class="react-line-number react-code-text" style="padding-right: 16px;">320</div><div data-line-number="321" class="react-line-number react-code-text" style="padding-right: 16px;">321</div><div data-line-number="322" class="react-line-number react-code-text" style="padding-right: 16px;">322</div><div data-line-number="323" class="react-line-number react-code-text" style="padding-right: 16px;">323</div><div data-line-number="324" class="react-line-number react-code-text" style="padding-right: 16px;">324</div><div data-line-number="325" class="react-line-number react-code-text" style="padding-right: 16px;">325</div><div data-line-number="326" class="react-line-number react-code-text" style="padding-right: 16px;">326</div><div data-line-number="327" class="react-line-number react-code-text" style="padding-right: 16px;">327</div><div data-line-number="328" class="react-line-number react-code-text" style="padding-right: 16px;">328</div><div data-line-number="329" class="react-line-number react-code-text" style="padding-right: 16px;">329</div><div data-line-number="330" class="react-line-number react-code-text" style="padding-right: 16px;">330</div><div data-line-number="331" class="react-line-number react-code-text" style="padding-right: 16px;">331</div><div data-line-number="332" class="react-line-number react-code-text" style="padding-right: 16px;">332</div><div data-line-number="333" class="react-line-number react-code-text" style="padding-right: 16px;">333</div><div data-line-number="334" class="react-line-number react-code-text" style="padding-right: 16px;">334</div><div data-line-number="335" class="react-line-number react-code-text" style="padding-right: 16px;">335</div><div data-line-number="336" class="react-line-number react-code-text" style="padding-right: 16px;">336</div><div data-line-number="337" class="react-line-number react-code-text" style="padding-right: 16px;">337</div><div data-line-number="338" class="react-line-number react-code-text" style="padding-right: 16px;">338</div><div data-line-number="339" class="react-line-number react-code-text" style="padding-right: 16px;">339</div><div data-line-number="340" class="react-line-number react-code-text" style="padding-right: 16px;">340</div><div data-line-number="341" class="react-line-number react-code-text" style="padding-right: 16px;">341</div><div data-line-number="342" class="react-line-number react-code-text" style="padding-right: 16px;">342</div><div data-line-number="343" class="react-line-number react-code-text" style="padding-right: 16px;">343</div><div data-line-number="344" class="react-line-number react-code-text" style="padding-right: 16px;">344</div><div data-line-number="345" class="react-line-number react-code-text" style="padding-right: 16px;">345</div><div data-line-number="346" class="react-line-number react-code-text" style="padding-right: 16px;">346</div><div data-line-number="347" class="react-line-number react-code-text" style="padding-right: 16px;">347</div><div data-line-number="348" class="react-line-number react-code-text" style="padding-right: 16px;">348</div><div data-line-number="349" class="react-line-number react-code-text" style="padding-right: 16px;">349</div><div data-line-number="350" class="react-line-number react-code-text" style="padding-right: 16px;">350</div><div data-line-number="351" class="react-line-number react-code-text" style="padding-right: 16px;">351</div><div data-line-number="352" class="react-line-number react-code-text" style="padding-right: 16px;">352</div><div data-line-number="353" class="react-line-number react-code-text" style="padding-right: 16px;">353</div><div data-line-number="354" class="react-line-number react-code-text" style="padding-right: 16px;">354</div><div data-line-number="355" class="react-line-number react-code-text" style="padding-right: 16px;">355</div><div data-line-number="356" class="react-line-number react-code-text" style="padding-right: 16px;">356</div><div data-line-number="357" class="react-line-number react-code-text" style="padding-right: 16px;">357</div><div data-line-number="358" class="react-line-number react-code-text" style="padding-right: 16px;">358</div><div data-line-number="359" class="react-line-number react-code-text" style="padding-right: 16px;">359</div><div data-line-number="360" class="react-line-number react-code-text" style="padding-right: 16px;">360</div></div><div class="react-no-virtualization-wrapper-lines"><div data-line-number="361" class="react-line-number react-code-text" style="padding-right: 16px;">361</div><div data-line-number="362" class="react-line-number react-code-text" style="padding-right: 16px;">362</div><div data-line-number="363" class="react-line-number react-code-text" style="padding-right: 16px;">363</div><div data-line-number="364" class="react-line-number react-code-text" style="padding-right: 16px;">364</div><div data-line-number="365" class="react-line-number react-code-text" style="padding-right: 16px;">365</div><div data-line-number="366" class="react-line-number react-code-text" style="padding-right: 16px;">366</div><div data-line-number="367" class="react-line-number react-code-text" style="padding-right: 16px;">367</div><div data-line-number="368" class="react-line-number react-code-text" style="padding-right: 16px;">368</div><div data-line-number="369" class="react-line-number react-code-text" style="padding-right: 16px;">369</div><div data-line-number="370" class="react-line-number react-code-text" style="padding-right: 16px;">370</div><div data-line-number="371" class="react-line-number react-code-text" style="padding-right: 16px;">371</div><div data-line-number="372" class="react-line-number react-code-text" style="padding-right: 16px;">372</div><div data-line-number="373" class="react-line-number react-code-text" style="padding-right: 16px;">373</div><div data-line-number="374" class="react-line-number react-code-text" style="padding-right: 16px;">374</div><div data-line-number="375" class="react-line-number react-code-text" style="padding-right: 16px;">375</div><div data-line-number="376" class="react-line-number react-code-text" style="padding-right: 16px;">376</div><div data-line-number="377" class="react-line-number react-code-text" style="padding-right: 16px;">377</div><div data-line-number="378" class="react-line-number react-code-text" style="padding-right: 16px;">378</div><div data-line-number="379" class="react-line-number react-code-text" style="padding-right: 16px;">379</div><div data-line-number="380" class="react-line-number react-code-text" style="padding-right: 16px;">380</div><div data-line-number="381" class="react-line-number react-code-text" style="padding-right: 16px;">381</div><div data-line-number="382" class="react-line-number react-code-text" style="padding-right: 16px;">382</div><div data-line-number="383" class="react-line-number react-code-text" style="padding-right: 16px;">383</div><div data-line-number="384" class="react-line-number react-code-text" style="padding-right: 16px;">384</div><div data-line-number="385" class="react-line-number react-code-text" style="padding-right: 16px;">385</div><div data-line-number="386" class="react-line-number react-code-text" style="padding-right: 16px;">386</div><div data-line-number="387" class="react-line-number react-code-text" style="padding-right: 16px;">387</div><div data-line-number="388" class="react-line-number react-code-text" style="padding-right: 16px;">388</div><div data-line-number="389" class="react-line-number react-code-text" style="padding-right: 16px;">389</div><div data-line-number="390" class="react-line-number react-code-text" style="padding-right: 16px;">390</div><div data-line-number="391" class="react-line-number react-code-text" style="padding-right: 16px;">391</div><div data-line-number="392" class="react-line-number react-code-text" style="padding-right: 16px;">392</div><div data-line-number="393" class="react-line-number react-code-text" style="padding-right: 16px;">393</div><div data-line-number="394" class="react-line-number react-code-text" style="padding-right: 16px;">394</div><div data-line-number="395" class="react-line-number react-code-text" style="padding-right: 16px;">395</div><div data-line-number="396" class="react-line-number react-code-text" style="padding-right: 16px;">396</div><div data-line-number="397" class="react-line-number react-code-text" style="padding-right: 16px;">397</div><div data-line-number="398" class="react-line-number react-code-text" style="padding-right: 16px;">398</div><div data-line-number="399" class="react-line-number react-code-text" style="padding-right: 16px;">399</div><div data-line-number="400" class="react-line-number react-code-text" style="padding-right: 16px;">400</div><div data-line-number="401" class="react-line-number react-code-text" style="padding-right: 16px;">401</div><div data-line-number="402" class="react-line-number react-code-text" style="padding-right: 16px;">402</div><div data-line-number="403" class="react-line-number react-code-text" style="padding-right: 16px;">403</div><div data-line-number="404" class="react-line-number react-code-text" style="padding-right: 16px;">404</div></div></div><div class="react-code-lines"><div inert="inert"><div class="react-no-virtualization-wrapper"><div id="LC1" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-k">const</span> <span class="pl-s1">foodItem</span><span class="pl-c1">=</span> <span class="pl-kos">[</span></div>
<div id="LC2" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-kos">{</span></div>
<div id="LC3" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">1</span><span class="pl-kos">,</span></div>
<div id="LC4" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Ambur Biryani'</span><span class="pl-kos">,</span></div>
<div id="LC5" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'biryani'</span><span class="pl-kos">,</span></div>
<div id="LC6" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC7" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">13</span><span class="pl-kos">,</span></div>
<div id="LC8" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/biryani/Ambur-Chicken-Biryani.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC9" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC10" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC11" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC12" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">2</span><span class="pl-kos">,</span></div>
<div id="LC13" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Hyderabadi Biryani'</span><span class="pl-kos">,</span></div>
<div id="LC14" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'biryani'</span><span class="pl-kos">,</span></div>
<div id="LC15" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC16" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">15</span><span class="pl-kos">,</span></div>
<div id="LC17" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/biryani/Chicken-Biryani-hyd.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC18" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC19" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC20" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC21" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">3</span><span class="pl-kos">,</span></div>
<div id="LC22" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Egg Biryani'</span><span class="pl-kos">,</span></div>
<div id="LC23" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'biryani'</span><span class="pl-kos">,</span></div>
<div id="LC24" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC25" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">18</span><span class="pl-kos">,</span></div>
<div id="LC26" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/biryani/egg-biryani.jpeg'</span><span class="pl-kos">,</span></div>
<div id="LC27" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC28" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC29" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC30" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">4</span><span class="pl-kos">,</span></div>
<div id="LC31" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Goan Fish Biryani'</span><span class="pl-kos">,</span></div>
<div id="LC32" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'biryani'</span><span class="pl-kos">,</span></div>
<div id="LC33" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC34" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">15</span><span class="pl-kos">,</span></div>
<div id="LC35" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/biryani/goan-fish-biryani.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC36" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC37" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC38" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC39" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">5</span><span class="pl-kos">,</span></div>
<div id="LC40" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Mutton Biryani'</span><span class="pl-kos">,</span></div>
<div id="LC41" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'biryani'</span><span class="pl-kos">,</span></div>
<div id="LC42" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC43" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">10</span><span class="pl-kos">,</span></div>
<div id="LC44" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/biryani/hyd-Mutton-Biryani.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC45" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC46" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC47" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC48" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">6</span><span class="pl-kos">,</span></div>
<div id="LC49" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Kamrupi Biryani'</span><span class="pl-kos">,</span></div>
<div id="LC50" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'biryani'</span><span class="pl-kos">,</span></div>
<div id="LC51" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC52" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">12</span><span class="pl-kos">,</span></div>
<div id="LC53" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/biryani/kamrupi-biryani.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC54" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC55" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC56" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC57" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">7</span><span class="pl-kos">,</span></div>
<div id="LC58" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Kashmiri Biryani'</span><span class="pl-kos">,</span></div>
<div id="LC59" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'biryani'</span><span class="pl-kos">,</span></div>
<div id="LC60" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div></div>
<div class="react-no-virtualization-wrapper"><div id="LC61" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">13</span><span class="pl-kos">,</span></div>
<div id="LC62" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/biryani/kashmiri.pulao.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC63" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC64" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC65" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC66" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">8</span><span class="pl-kos">,</span></div>
<div id="LC67" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Memoni Biryani'</span><span class="pl-kos">,</span></div>
<div id="LC68" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'biryani'</span><span class="pl-kos">,</span></div>
<div id="LC69" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC70" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">20</span><span class="pl-kos">,</span></div>
<div id="LC71" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/biryani/memonibiryani.png'</span><span class="pl-kos">,</span></div>
<div id="LC72" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC73" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC74" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC75" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">9</span><span class="pl-kos">,</span></div>
<div id="LC76" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Mughlai Biryani'</span><span class="pl-kos">,</span></div>
<div id="LC77" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'biryani'</span><span class="pl-kos">,</span></div>
<div id="LC78" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC79" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">15</span><span class="pl-kos">,</span></div>
<div id="LC80" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/biryani/mughlai-biryani.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC81" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC82" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC83" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC84" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">10</span><span class="pl-kos">,</span></div>
<div id="LC85" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Chicken Roast'</span><span class="pl-kos">,</span></div>
<div id="LC86" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'chicken'</span><span class="pl-kos">,</span></div>
<div id="LC87" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC88" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">11</span><span class="pl-kos">,</span></div>
<div id="LC89" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/chicken/Chicken_roast.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC90" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC91" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC92" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC93" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">11</span><span class="pl-kos">,</span></div>
<div id="LC94" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Chicken Curry'</span><span class="pl-kos">,</span></div>
<div id="LC95" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'chicken'</span><span class="pl-kos">,</span></div>
<div id="LC96" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC97" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">10</span><span class="pl-kos">,</span></div>
<div id="LC98" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/chicken/Chicken-Curry.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC99" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC100" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC101" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC102" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">12</span><span class="pl-kos">,</span></div>
<div id="LC103" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Chicken Do Pyaza'</span><span class="pl-kos">,</span></div>
<div id="LC104" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'chicken'</span><span class="pl-kos">,</span></div>
<div id="LC105" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC106" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">14</span><span class="pl-kos">,</span></div>
<div id="LC107" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/chicken/Chicken-do-Pyaza.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC108" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC109" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC110" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC111" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">13</span><span class="pl-kos">,</span></div>
<div id="LC112" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Chicken Masala'</span><span class="pl-kos">,</span></div>
<div id="LC113" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'chicken'</span><span class="pl-kos">,</span></div>
<div id="LC114" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC115" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">12</span><span class="pl-kos">,</span></div>
<div id="LC116" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/chicken/Chicken-Masala.jpeg'</span><span class="pl-kos">,</span></div>
<div id="LC117" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC118" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC119" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC120" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">14</span><span class="pl-kos">,</span></div></div>
<div class="react-no-virtualization-wrapper"><div id="LC121" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Handi Chicken'</span><span class="pl-kos">,</span></div>
<div id="LC122" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'chicken'</span><span class="pl-kos">,</span></div>
<div id="LC123" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC124" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">17</span><span class="pl-kos">,</span></div>
<div id="LC125" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/chicken/Handi-chicken.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC126" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC127" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC128" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC129" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">15</span><span class="pl-kos">,</span></div>
<div id="LC130" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Murgh Musallam'</span><span class="pl-kos">,</span></div>
<div id="LC131" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'chicken'</span><span class="pl-kos">,</span></div>
<div id="LC132" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC133" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">20</span><span class="pl-kos">,</span></div>
<div id="LC134" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/chicken/Murgh-Musallam.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC135" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC136" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC137" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC138" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">16</span><span class="pl-kos">,</span></div>
<div id="LC139" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Matar Paneer'</span><span class="pl-kos">,</span></div>
<div id="LC140" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'paneer'</span><span class="pl-kos">,</span></div>
<div id="LC141" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC142" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">15</span><span class="pl-kos">,</span></div>
<div id="LC143" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/paneer/Matar-Paneer.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC144" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC145" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC146" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC147" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC148" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">17</span><span class="pl-kos">,</span></div>
<div id="LC149" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Palak Paneer'</span><span class="pl-kos">,</span></div>
<div id="LC150" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'paneer'</span><span class="pl-kos">,</span></div>
<div id="LC151" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC152" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">10</span><span class="pl-kos">,</span></div>
<div id="LC153" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/paneer/palak-paneer.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC154" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC155" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC156" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC157" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">18</span><span class="pl-kos">,</span></div>
<div id="LC158" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Paneer Butter Masala'</span><span class="pl-kos">,</span></div>
<div id="LC159" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'paneer'</span><span class="pl-kos">,</span></div>
<div id="LC160" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC161" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">15</span><span class="pl-kos">,</span></div>
<div id="LC162" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/paneer/paneer-butter-masala.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC163" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC164" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC165" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC166" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC167" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">19</span><span class="pl-kos">,</span></div>
<div id="LC168" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Paneer Do Pyaza'</span><span class="pl-kos">,</span></div>
<div id="LC169" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'paneer'</span><span class="pl-kos">,</span></div>
<div id="LC170" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC171" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">12</span><span class="pl-kos">,</span></div>
<div id="LC172" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/paneer/Paneer-Do-Pyaza.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC173" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC174" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC175" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC176" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC177" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">20</span><span class="pl-kos">,</span></div>
<div id="LC178" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Hyderabadi Paneer'</span><span class="pl-kos">,</span></div>
<div id="LC179" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'paneer'</span><span class="pl-kos">,</span></div>
<div id="LC180" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div></div>
<div class="react-no-virtualization-wrapper"><div id="LC181" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">8</span><span class="pl-kos">,</span></div>
<div id="LC182" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/paneer/Paneer-Hyderabadi.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC183" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC184" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC185" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC186" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">21</span><span class="pl-kos">,</span></div>
<div id="LC187" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Paneer Lababdar'</span><span class="pl-kos">,</span></div>
<div id="LC188" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'paneer'</span><span class="pl-kos">,</span></div>
<div id="LC189" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC190" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">7</span><span class="pl-kos">,</span></div>
<div id="LC191" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/paneer/paneer-lababdar.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC192" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC193" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC194" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC195" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">22</span><span class="pl-kos">,</span></div>
<div id="LC196" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Shahi Paneer'</span><span class="pl-kos">,</span></div>
<div id="LC197" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">age</span>: <span class="pl-s">'32'</span><span class="pl-kos">,</span></div>
<div id="LC198" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'paneer'</span><span class="pl-kos">,</span></div>
<div id="LC199" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC200" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">5</span><span class="pl-kos">,</span></div>
<div id="LC201" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/paneer/shahi-paneer.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC202" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC203" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC204" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC205" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">23</span><span class="pl-kos">,</span></div>
<div id="LC206" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Navratan Korma'</span><span class="pl-kos">,</span></div>
<div id="LC207" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'vegetable'</span><span class="pl-kos">,</span></div>
<div id="LC208" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC209" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">8</span><span class="pl-kos">,</span></div>
<div id="LC210" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/vegetable/navratan-korma_-vegetable.png'</span><span class="pl-kos">,</span></div>
<div id="LC211" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC212" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC213" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC214" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">24</span><span class="pl-kos">,</span></div>
<div id="LC215" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Veg Jalfrezi'</span><span class="pl-kos">,</span></div>
<div id="LC216" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'vegetable'</span><span class="pl-kos">,</span></div>
<div id="LC217" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC218" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">7</span><span class="pl-kos">,</span></div>
<div id="LC219" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/vegetable/VEG-JALFREZI.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC220" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC221" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC222" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC223" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">25</span><span class="pl-kos">,</span></div>
<div id="LC224" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Veg Biryani'</span><span class="pl-kos">,</span></div>
<div id="LC225" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'vegetable'</span><span class="pl-kos">,</span></div>
<div id="LC226" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC227" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">5</span><span class="pl-kos">,</span></div>
<div id="LC228" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/vegetable/vegetable-biryani.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC229" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC230" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC231" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC232" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">26</span><span class="pl-kos">,</span></div>
<div id="LC233" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Veg Curry'</span><span class="pl-kos">,</span></div>
<div id="LC234" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'vegetable'</span><span class="pl-kos">,</span></div>
<div id="LC235" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC236" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">7</span><span class="pl-kos">,</span></div>
<div id="LC237" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/vegetable/vegetable-curry.jpeg'</span><span class="pl-kos">,</span></div>
<div id="LC238" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC239" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC240" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div></div>
<div class="react-no-virtualization-wrapper"><div id="LC241" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">27</span><span class="pl-kos">,</span></div>
<div id="LC242" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Veg Kolhapur'</span><span class="pl-kos">,</span></div>
<div id="LC243" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'vegetable'</span><span class="pl-kos">,</span></div>
<div id="LC244" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC245" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">10</span><span class="pl-kos">,</span></div>
<div id="LC246" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/vegetable/vegetable-kolhapuri.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC247" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC248" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC249" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC250" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">28</span><span class="pl-kos">,</span></div>
<div id="LC251" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Veg Masala'</span><span class="pl-kos">,</span></div>
<div id="LC252" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'vegetable'</span><span class="pl-kos">,</span></div>
<div id="LC253" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC254" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">4</span><span class="pl-kos">,</span></div>
<div id="LC255" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/vegetable/vegetable-masala.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC256" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC257" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC258" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC259" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">29</span><span class="pl-kos">,</span></div>
<div id="LC260" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Veg Pakora'</span><span class="pl-kos">,</span></div>
<div id="LC261" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'vegetable'</span><span class="pl-kos">,</span></div>
<div id="LC262" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC263" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">4</span><span class="pl-kos">,</span></div>
<div id="LC264" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/vegetable/vegetable-pakora.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC265" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC266" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC267" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC268" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">30</span><span class="pl-kos">,</span></div>
<div id="LC269" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Momos'</span><span class="pl-kos">,</span></div>
<div id="LC270" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'chinese'</span><span class="pl-kos">,</span></div>
<div id="LC271" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC272" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">8</span><span class="pl-kos">,</span></div>
<div id="LC273" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/chinese/cabbage-momos-.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC274" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC275" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC276" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC277" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">31</span><span class="pl-kos">,</span></div>
<div id="LC278" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Chicken Manchurian'</span><span class="pl-kos">,</span></div>
<div id="LC279" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'chinese'</span><span class="pl-kos">,</span></div>
<div id="LC280" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC281" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">7</span><span class="pl-kos">,</span></div>
<div id="LC282" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/chinese/ChickenManchurian.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC283" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC284" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC285" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC286" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">32</span><span class="pl-kos">,</span></div>
<div id="LC287" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Chili Chicken'</span><span class="pl-kos">,</span></div>
<div id="LC288" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'chinese'</span><span class="pl-kos">,</span></div>
<div id="LC289" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC290" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">5</span><span class="pl-kos">,</span></div>
<div id="LC291" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/chinese/Chili-Chicken.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC292" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC293" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC294" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC295" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">33</span><span class="pl-kos">,</span></div>
<div id="LC296" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Chowmein'</span><span class="pl-kos">,</span></div>
<div id="LC297" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'chinese'</span><span class="pl-kos">,</span></div>
<div id="LC298" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC299" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">16</span><span class="pl-kos">,</span></div>
<div id="LC300" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/chinese/chowmin.jpg'</span><span class="pl-kos">,</span></div></div>
<div class="react-no-virtualization-wrapper"><div id="LC301" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC302" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC303" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC304" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">34</span><span class="pl-kos">,</span></div>
<div id="LC305" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Spring Roll'</span><span class="pl-kos">,</span></div>
<div id="LC306" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'chinese'</span><span class="pl-kos">,</span></div>
<div id="LC307" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC308" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">14</span><span class="pl-kos">,</span></div>
<div id="LC309" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/chinese/spring-rolls.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC310" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC311" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC312" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC313" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">35</span><span class="pl-kos">,</span></div>
<div id="LC314" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Szechuan Chicken'</span><span class="pl-kos">,</span></div>
<div id="LC315" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'chinese'</span><span class="pl-kos">,</span></div>
<div id="LC316" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC317" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">10</span><span class="pl-kos">,</span></div>
<div id="LC318" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/chinese/szechuan-chicken.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC319" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC320" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC321" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC322" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">36</span><span class="pl-kos">,</span></div>
<div id="LC323" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Fried Rice'</span><span class="pl-kos">,</span></div>
<div id="LC324" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'chinese'</span><span class="pl-kos">,</span></div>
<div id="LC325" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC326" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">8</span><span class="pl-kos">,</span></div>
<div id="LC327" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/chinese/veg-fried-rice.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC328" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC329" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC330" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC331" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">37</span><span class="pl-kos">,</span></div>
<div id="LC332" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Butter Masala Dosa'</span><span class="pl-kos">,</span></div>
<div id="LC333" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'south indian'</span><span class="pl-kos">,</span></div>
<div id="LC334" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC335" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">18</span><span class="pl-kos">,</span></div>
<div id="LC336" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/south indian/Butter-Masala-Dosa.png'</span><span class="pl-kos">,</span></div>
<div id="LC337" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC338" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC339" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC340" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">38</span><span class="pl-kos">,</span></div>
<div id="LC341" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Idli'</span><span class="pl-kos">,</span></div>
<div id="LC342" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'south indian'</span><span class="pl-kos">,</span></div>
<div id="LC343" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC344" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">20</span><span class="pl-kos">,</span></div>
<div id="LC345" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/south indian/idli-with-rice-flour.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC346" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC347" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC348" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC349" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">39</span><span class="pl-kos">,</span></div>
<div id="LC350" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Masala Dosa'</span><span class="pl-kos">,</span></div>
<div id="LC351" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'south indian'</span><span class="pl-kos">,</span></div>
<div id="LC352" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC353" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">12</span><span class="pl-kos">,</span></div>
<div id="LC354" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/south indian/masala-dosa.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC355" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC356" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC357" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC358" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">40</span><span class="pl-kos">,</span></div>
<div id="LC359" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Mysore Bonda'</span><span class="pl-kos">,</span></div>
<div id="LC360" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'south indian'</span><span class="pl-kos">,</span></div></div>
<div class="react-no-virtualization-wrapper"><div id="LC361" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC362" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">10</span><span class="pl-kos">,</span></div>
<div id="LC363" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/south indian/mysore-bonda.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC364" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC365" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC366" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC367" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">41</span><span class="pl-kos">,</span></div>
<div id="LC368" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Onion Uttapam'</span><span class="pl-kos">,</span></div>
<div id="LC369" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'south indian'</span><span class="pl-kos">,</span></div>
<div id="LC370" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC371" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">15</span><span class="pl-kos">,</span></div>
<div id="LC372" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/south indian/onion-uttapam.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC373" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC374" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC375" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC376" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">42</span><span class="pl-kos">,</span></div>
<div id="LC377" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Plain Dosa'</span><span class="pl-kos">,</span></div>
<div id="LC378" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'south indian'</span><span class="pl-kos">,</span></div>
<div id="LC379" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC380" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">40</span><span class="pl-kos">,</span></div>
<div id="LC381" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/south indian/plain-dosa.jpeg'</span><span class="pl-kos">,</span></div>
<div id="LC382" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC383" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC384" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC385" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">43</span><span class="pl-kos">,</span></div>
<div id="LC386" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Rava Uttapam'</span><span class="pl-kos">,</span></div>
<div id="LC387" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'south indian'</span><span class="pl-kos">,</span></div>
<div id="LC388" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC389" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">25</span><span class="pl-kos">,</span></div>
<div id="LC390" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/south indian/Rava-Uttapam.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC391" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC392" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC393" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">{</span></div>
<div id="LC394" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">id</span>: <span class="pl-c1">44</span><span class="pl-kos">,</span></div>
<div id="LC395" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">name</span>: <span class="pl-s">'Sambhar Vada'</span><span class="pl-kos">,</span></div>
<div id="LC396" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">category</span> : <span class="pl-s">'south indian'</span><span class="pl-kos">,</span></div>
<div id="LC397" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">rating</span> : <span class="pl-c1">4.3</span><span class="pl-kos">,</span></div>
<div id="LC398" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">price</span>: <span class="pl-c1">34</span><span class="pl-kos">,</span></div>
<div id="LC399" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">img</span>: <span class="pl-s">'images/south indian/sambhar-vada.jpg'</span><span class="pl-kos">,</span></div>
<div id="LC400" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-c1">quantity</span>: <span class="pl-c1">1</span></div>
<div id="LC401" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC402" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">]</span></div>
<div id="LC403" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC404" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-k">export</span> <span class="pl-kos">{</span><span class="pl-s1">foodItem</span><span class="pl-kos">}</span><span class="pl-kos">;</span></div></div></div></div><button hidden="" data-hotkey="Control+a"></button></div></div></div></div><div id="copilot-button-container"></div></div><div id="highlighted-line-menu-container"></div></div></div></section></div></div></div> <!-- --> <!-- --> </div></div></div><div class="Box-sc-g0xbh4-0"></div></div></div></div></div><div id="find-result-marks-container" class="Box-sc-g0xbh4-0 cCoXib"></div><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+F6,Control+Shift+F6"></button><button hidden="" data-hotkey="Control+F6,Control+Shift+F6"></button></div> <!-- --> <!-- --> <script type="application/json" id="__PRIMER_DATA_:R0:__">{"resolvedServerColorMode":"day"}</script></div>
</react-app>




  </div>

</turbo-frame>

    </main>
  </div>

  </div>

          <footer class="footer pt-8 pb-6 f6 color-fg-muted p-responsive" role="contentinfo" hidden="">
  <h2 class="sr-only">Footer</h2>

  


  <div class="d-flex flex-justify-center flex-items-center flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap">
    <div class="d-flex flex-items-center flex-shrink-0 mx-2">
      <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-2" href="https://github.com/">
        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
</svg>
</a>
      <span>
        © 2025 GitHub,&nbsp;Inc.
      </span>
    </div>

    <nav aria-label="Footer">
      <h3 class="sr-only" id="sr-footer-heading">Footer navigation</h3>

      <ul class="list-style-none d-flex flex-justify-center flex-wrap mb-2 mb-lg-0" aria-labelledby="sr-footer-heading">

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link--secondary Link">Terms</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link--secondary Link">Privacy</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security" data-view-component="true" class="Link--secondary Link">Security</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}" href="https://www.githubstatus.com/" data-view-component="true" class="Link--secondary Link">Status</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to docs&quot;,&quot;label&quot;:&quot;text:docs&quot;}" href="https://docs.github.com/" data-view-component="true" class="Link--secondary Link">Docs</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}" href="https://support.github.com/?tags=dotcom-footer" data-view-component="true" class="Link--secondary Link">Contact</a>
          </li>

          <li class="mx-2">
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent" data-action="click:cookie-consent-link#showConsentManagement" data-analytics-event="{&quot;location&quot;:&quot;footer&quot;,&quot;action&quot;:&quot;cookies&quot;,&quot;context&quot;:&quot;subfooter&quot;,&quot;tag&quot;:&quot;link&quot;,&quot;label&quot;:&quot;cookies_link_subfooter_footer&quot;}">
      Manage cookies
    </button>
  </cookie-consent-link>
</li>

<li class="mx-2">
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent" data-action="click:cookie-consent-link#showConsentManagement" data-analytics-event="{&quot;location&quot;:&quot;footer&quot;,&quot;action&quot;:&quot;dont_share_info&quot;,&quot;context&quot;:&quot;subfooter&quot;,&quot;tag&quot;:&quot;link&quot;,&quot;label&quot;:&quot;dont_share_info_link_subfooter_footer&quot;}">
      Do not share my personal information
    </button>
  </cookie-consent-link>
</li>

      </ul>
    </nav>
  </div>
</footer>



    <ghcc-consent id="ghcc" class="position-fixed bottom-0 left-0" style="z-index: 999999" data-initial-cookie-consent-allowed="" data-cookie-consent-required="false" data-catalyst=""></ghcc-consent>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden="">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    </button>
    You can’t perform that action at this time.
  </div>

    <template id="site-details-dialog"></template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;"></div>
</div>

    <template id="snippet-clipboard-copy-button"></template>
<template id="snippet-clipboard-copy-button-unpositioned"></template>


    <style>
      .user-mention[href$="/AnanyaBansal28"] {
        color: var(--color-user-mention-fg);
        background-color: var(--bgColor-attention-muted, var(--color-attention-subtle));
        border-radius: 2px;
        margin-left: -2px;
        margin-right: -2px;
      }
      .user-mention[href$="/AnanyaBansal28"]:before,
      .user-mention[href$="/AnanyaBansal28"]:after {
        content: '';
        display: inline-block;
        width: 2px;
      }
    </style>


    </div>

    <div id="js-global-screen-reader-notice" class="sr-only mt-n1" aria-live="polite" aria-atomic="true">shoppingsite/fooditem.js at main · Ahmad528/shoppingsite</div>
    <div id="js-global-screen-reader-notice-assertive" class="sr-only mt-n1" aria-live="assertive" aria-atomic="true"></div>
  


<div class="sr-only mt-n1" id="screenReaderAnnouncementDiv" role="alert" data-testid="screenReaderAnnouncement" aria-live="assertive">&nbsp;</div></body></html>
