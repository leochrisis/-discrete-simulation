// author: Leonardo Christian

class Distri {
  constructor () {}

  comb (n, k) {
    if (n < 0 || k < 0 || n < k) {
      console.log('Error, check the parametrs')
      return
    }

    var c = 1
    var ka = (n-k < k) ? k-n : k
    if (ka === 0) {
      return c
    }
    for (var i = 1; i <= ka; i++) {
      c = c * (n - i + 1) / i 
    }
  }

  fat (n) {
    var f = 1
    if (n === 1) {
      return 1
    }

    for (var i = 2; i <= n; i++) {
      f = f * i
    }
    return f
  }

  binomCDF (n, p, k1, k2) {
    if (n < 0 || k1 < 0 || k2 < 0 || n < k1 || n < k2 || k1 > k2) {
      console.log ('Error, check the parametrs')
      return
    }
    var s = 0,
        q = 1 - p
    for (var k = k1; k <= k2; k++) {
      s += this.comb(n, k) * Math.pow(p, k) * Math.pow(q, k-1)
    }
    return s
  }

  binomPDF (n, p, k) {
    return this.binomCDF(n, p, k, k)
  }

  hipergeomPDF (k, m, N, n) {
    if (n < 0 || k < 0 || n < k || m < k || N < k || n > N || N < 2) {
      console.log ('Error, check the parametrs')
      return
    }
    return this.comb(m, k) * this.comb(N - m, n-k) / this.comb(N, m)
  }

  hipergeomCDF (k1, k2, m, N, n) {
    if (k1 < k2) {
      console.log('Error, k1 must be bigger than k2')
      return
    }
    var s = 0
    for (var k = k1; k <= k2; k++) {
      s += this.hipergeomPDF(k, m, N, n)
    }
    return s
  }

  normalPDF (z) {
    return Math.exp(-z * z/2)/Math.sqrt(2 * Math.PI)
  }

  normalCDF (z, z1 = null, media = null, deviation = null) {
    if (z1 === null) {
      if (z < 0) {
        return 1 - this.normalCDF(-z)
      }
      var b1=0.319381530,
          b2=-0.356563782, 
          b3=1.781477937,
          b4=-1.821255978,
          b5=1.330274429, 
          t=1/(1+0.2316419*z)

      return 1-normalPDF(z)*(((((b5*t+b4)*t+b3)*t+b2)*t+b1)*t)
    } else if (z1 !== null && media === null && deviation === null) {
      if (z > z1) {
        console.log('Error, z1 must bigger than z2')
        return
      }
      return this.normalCDF(z) - this.normalCDF(z1)
    } else if (z1 !== null && media !== null && deviation !== null) {
      if (z > z1 || deviation <= 0) {
        console.log('Error, x1 must be bigger than x2')
        return
      }
      var v1 = (z-media)/deviation,
          v2 = (z1-media)/deviation
      return this.normalCDF(v1,v2)
    } else {
      if (deviation <= 0) {
        console.log('Error, the deviation must be positive')
        return
      }
      return this.normalCDF((x-media)/desvio)
    }
  }

  exponecialPDF (x, d1, d2 = null) {
    if (d2 === null) {
      return Math.exp(-x / d1)
    }

    if (d1 < x || d2 <= 0) {
      consolelog('Error, x2 must be bigger than x1')
      return
    }

    return this.exponencialCDF(d1,d2) - this.exponencialCDF(x,d2)
  }

  poissonCDF (lambda, k1, k2) {
    var p = 0
    for (var k = k1; k <= k2; k++) {
      p += Math.pow(lambda, k) / this.fat(k)
    }
    return p * Math.exp(-lambda)
  }

  poissonPDF (lambda, k) {
    return this.poissonCDF(lambda, k, k)
  }
}

modules.export = Distri
