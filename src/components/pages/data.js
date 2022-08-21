export const Fractals = {
    gela:{code:`#ifdef GL_ES
    precision highp float;
    #endif
    
    uniform float gela;
    
    void main(){gl_FragColor = vec4(1.,gela,0.,1.);}`,uniforms:{gela:0.8}},
    luker:{code:`#ifdef GL_ES
    precision highp float;
    #endif
    
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;
    
    
    #define phase_shift_on 
    
    // Rotation matrix around the X axis.
    mat3 rotateX(float theta){
      float c=cos(theta);
      float s=sin(theta);
      return mat3(
        vec3(1,0,0),
        vec3(0,c,-s),
        vec3(0,s,c)
      );
    }
    
    // Rotation matrix around the Y axis.
    mat3 rotateY(float theta){
      float c=cos(theta);
      float s=sin(theta);
      return mat3(
        vec3(c,0,s),
        vec3(0,1,0),
        vec3(-s,0,c)
      );
    }
    
    // Rotation matrix around the Z axis.
    mat3 rotateZ(float theta){
      float c=cos(theta);
      float s=sin(theta);
      return mat3(
        vec3(c,-s,0),
        vec3(s,c,0),
        vec3(0,0,1)
      );
    }
    
    // Identity matrix.
    mat3 identity(){
      return mat3(
        vec3(1,0,0),
        vec3(0,1,0),
        vec3(0,0,1)
      );
    }
    
    float stime, ctime;
     void ry(inout vec3 p, float a){  
         float c,s;vec3 q=p;  
          c = cos(a); s = sin(a);  
          p.x = c * q.x + s * q.z;  
          p.z = -s * q.x + c * q.z; 
     }  
    
    float pixel_size = 0.0;
    
    vec3 mandelbulb(vec3 p,mat3 transform) {
        p=p*transform;
        p.xyz = p.xzy;
        vec3 z = p;
        vec3 dz=vec3(0.0);
        float power = 8.0;
        float r, theta, phi;
        float dr = 1.0;
        
        float t0 = .9;
        for(int i = 0; i < 7; ++i) {
            r = length(z);
            if(r > 2.0) continue;
            theta = atan(z.y / z.x);
            #ifdef phase_shift_on
            phi = asin(z.z / r) + u_time*0.1;
            #else
            phi = asin(z.z / r);
            #endif
            dr = pow(r, power - 1.0) * dr * power + 1.0;
            r = pow(r, power);
            theta = theta * power;
            phi = phi * power;
            z = r * vec3(cos(theta)*cos(phi), sin(theta)*cos(phi), sin(phi)) + p;
            t0 = min(.6 - t0 * 1., r);
        }
        return vec3(0.5 * log(r) * r / dr, t0, 0.0);
    }
    
     vec3 f(vec3 p){ 
         ry(p, u_time*0.2);
         return mandelbulb(p,rotateX(u_mouse.y/500.)*rotateY(-u_mouse.x/500.)*rotateZ(u_time/40.)); 
     } 
    
    
     float softshadow(vec3 ro, vec3 rd, float k ){ 
         float matata=1.0,h=0.0; 
         float t = 0.01;
         for(int i=0; i < 50; ++i){ 
             h=f(ro+rd*t).x; 
             if(h<0.001)return 0.02; 
             matata=min(matata, k*h/t); 
              t+=clamp(h,0.01,2.0); 
         } 
         return matata; 
     } 
    
    vec3 nor( in vec3 pos )
    {
        vec3 eps = vec3(0.001,0.0,0.0);
        return normalize( vec3(
               f(pos+eps.xyy).x - f(pos-eps.xyy).x,
               f(pos+eps.yxy).x - f(pos-eps.yxy).x,
               f(pos+eps.yyx).x - f(pos-eps.yyx).x ) );
    }
    
    vec3 intersect( in vec3 ro, in vec3 rd )
    {
        float t = 1.0;
        float res_t = 0.0;
        float res_d = 1000.0;
        vec3 c, res_c;
        float max_error = 1000.0;
        float d = 1.0;
        float pd = 100.0;
        float os = 0.0;
        float step = 0.0;
        float error = 1000.0;
        
        for( int i=0; i<48; i++ )
        {
            if( error < pixel_size*0.5 || t > 20.0 )
            {
            }
            else{  // avoid broken shader on windows
            
                c = f(ro + rd*t);
                d = c.x;
    
                if(d > os)
                {
                    os = 0.4 * d*d/pd;
                    step = d + os;
                    pd = d;
                }
                else
                {
                    step =-os; os = 0.0; pd = 100.0; d = 1.0;
                }
    
                error = d / t;
    
                if(error < max_error) 
                {
                    max_error = error;
                    res_t = t;
                    res_c = c;
                }
            
                t += step ;
            }
    
        }
        if( t>20.0/* || max_error > pixel_size*/ ) res_t=-1.0;
        return vec3(res_t, res_c.y, res_c.z);
    }
    
     void main() 
     { 
        vec2 q=gl_FragCoord.xy/u_resolution.xy; 
         vec2 uv = -1.0 + 2.0*q; 
         uv.x*=u_resolution.x/u_resolution.y; 
        uv *= 2.;
        pixel_size = 1.0/(u_resolution.x * 3.0);
    
        stime=0.7; 
         ctime=0.7; 
    
         vec3 ta=vec3(0.0,0.0,0.0); 
        vec3 ro = vec3(0.0, 3.*stime*ctime, 3.*(1.-stime*ctime));
    
         vec3 cf = normalize(ta-ro); 
        vec3 cs = normalize(cross(cf,vec3(0.0,1.0,0.0))); 
        vec3 cu = normalize(cross(cs,cf)); 
         vec3 rd = normalize(uv.x*cs + uv.y*cu + 3.0*cf);  // transform from view to world
    
        vec3 sundir = normalize(vec3(0.1, 0.8, 0.6)); 
        vec3 sun = vec3(1.64, 1.27, 0.99); 
        vec3 skycolor = vec3(0.6, 1.5, 1.0); 
    
        vec3 bg = exp(uv.y-2.0)*vec3(1., 1.6, 20.0);
    
        float halo=clamp(dot(normalize(vec3(-ro.x, -ro.y, -ro.z)), rd), 0.0, 1.0); 
        vec3 col=bg+vec3(0.9725, 0.9725, 0.9725)*pow(halo,15.0); 
    
    
        float t=0.0;
        vec3 p=ro; 
         
        vec3 res = intersect(ro, rd);
         if(res.x > 0.0){
               p = ro + res.x * rd;
               vec3 n=nor(p); 
               float shadow = softshadow(p, sundir, 10.0 );
    
               float dif = max(0.0, dot(n, sundir)); 
               float sky = 0.6 + 0.4 * max(0.0, dot(n, vec3(0.0, 1.0, 0.0))); 
                float bac = max(0.3 + 0.7 * dot(vec3(-sundir.x, -1.0, -sundir.z), n), 0.0); 
               float spe = max(0.0, pow(clamp(dot(sundir, reflect(rd, n)), 0.0, 1.0), 10.0)); 
    
               vec3 lin = 4.5 * sun * dif * shadow; 
               lin += 0.8 * bac * sun; 
               lin += 0.6 * sky * skycolor*shadow; 
               lin += 3.0 * spe * shadow; 
    
               res.y = pow(clamp(res.y, 0.0, 1.0), 0.55);
               vec3 tc0 = 0.5 + 0.5 * sin(3.0 + 4.2 * res.y + vec3(0.0, 0.5, 1.0));
               col = lin *vec3(0.9, 0.8, 0.6) *  0.2 * tc0;
                col=mix(col,bg, 1.0-exp(-0.001*res.x*res.x)); 
        } 
    
        // post
        col=pow(clamp(col,0.0,1.0),vec3(0.45)); 
        col=col*0.6+0.4*col*col*(3.0-2.0*col);  // contrast
        col=mix(col, vec3(dot(col, vec3(0.33))), -0.5);  // satuatio
         gl_FragColor = vec4(col.xyz, smoothstep(0.55, .76, 1.-res.x/5.)); 
     }`,uniforms:{dato:0.1}}
}