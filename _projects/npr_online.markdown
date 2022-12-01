---
layout: page
title: NPR Filters
description: A tool for viewing image filters online. This project has implemented some NPR algorithms you can use it directly and don’t need additional packages.
img: /assets/img/npr_online/FXDoG_AKF.png
importance: 1
category: papers implementation
github: https://raymondmcguire.github.io/GPU-Based-Image-Processing-Tools/
---
<a href="https://raymondmcguire.github.io/GPU-Based-Image-Processing-Tools/" target="_blank" title="GPU Based Image Processing Tools">Website</a>

<a href="https://github.com/RaymondMcGuire/GPU-Based-Image-Processing-Tools" target="_blank" title="GPU Based Image Processing Tools">GitHub</a>

<div class="caption">
    Input
</div>
<center>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/npr_online/anim.png' | relative_url }}" alt="" title="input image"/>
    </div>
</div>
</center>

<div class="caption">
    Output
</div>
<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/npr_online/LIC.png' | relative_url }}" alt="" title="Line Integral Convolution"/>
        <div class="caption">
            Integral Convolution
        </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/npr_online/AKF.png' | relative_url }}" alt="" title="Anisotropic KUWAHARA Filter"/>
             <div class="caption">
            Anisotropic KUWAHARA Filter
     </div>
    </div>

</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/npr_online/FXDoG.png' | relative_url }}" alt="" title="Line Flow eXtend Difference of Gaussian"/>
        <div class="caption">
            Flow eXtend Difference of Gaussian
        </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/npr_online/FXDoG_AKF.png' | relative_url }}" alt="" title="Mix Anisotropic KUWAHARA Filter and Flow eXtend Difference of Gaussian"/>
         <div class="caption">
            Mix Anisotropic KUWAHARA Filter and Flow eXtend Difference of Gaussian
    </div>
    </div>
    
</div>