export default async ({ $auth, $axios, store, route, redirect, isDev }) => {
  if ($auth.isExistUserAndExpired()) {
    if (isDev) {
      console.log('Execute silent refresh!!')
    }
    await $axios.$post('/api/v1/auth_token/refresh')
      .then(response => $auth.login(response))
      .catch(() => {
        $auth.resetVuex()
        if (route.name === 'logout') {
          return redirect('/')
        } else {
          const msg = 'セッションの有効期限が切れました。' +
                      'もう一度ログインしてください'
          // トースター出力
          store.dispatch('getToast', { msg })
          // アクセスルート記憶
          store.dispatch('getRememberPath', route)
          // Vuexの初期化(セッションはサーバで削除済み)
          return redirect('/login')
        }
      })
  }
}
