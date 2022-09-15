sampler s0 : register(s0);

float4 main(float2 tex : TEXCOORD0) : COLOR{
    float4 rgb = tex2D(s0, tex);

    // float4 res = float4((rgb[0] + rgb[1] + rgb[2])/3,
    //                      (rgb[0] + rgb[1] + rgb[2])/3, 
    //                      (rgb[0] + rgb[1] + rgb[2])/3, 1); // realiza a conversão para tons de cinza

    if(1.1*(rgb[0] + rgb[2]) - rgb[1] < 0){
            rgb = float4(tex[0], 0, tex[1], 1); // 0 = x | y = 1
    }

    return rgb;
} 