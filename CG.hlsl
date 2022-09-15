sampler s0 : register(s0);

float4 main(float2 tex : TEXCOORD0) : COLOR{
    float4 c0 = tex2D(s0, tex);
    
    // if(rgb[0] < 0.5 && rgb[1] > 0.5 && rgb[2] < 0.5){
    //     rgb = float4(1, 0, 0, 1);
    // }

    if(1.1*(c0[0] + c0[2] - c0[1] < 0)){
            c0 = float4(1,0,0,1);
    }

    return c0;
} 